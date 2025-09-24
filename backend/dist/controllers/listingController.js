"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingById = exports.claimListing = exports.deleteListing = exports.updateListing = exports.createListing = exports.getNGOListings = exports.getHotelListings = exports.getAvailableListings = void 0;
const Listing_1 = __importDefault(require("../models/Listing"));
// Get all available listings (for NGOs)
const getAvailableListings = async (req, res) => {
    try {
        const { page = 1, limit = 10, search, foodType, city, state } = req.query;
        const pageNum = Number(page) || 1;
        const limitNum = Number(limit) || 10;
        const baseMatch = {
            status: 'available',
            availableUntil: { $gte: new Date() },
        };
        if (search) {
            baseMatch.$or = [
                { title: { $regex: String(search), $options: 'i' } },
                { description: { $regex: String(search), $options: 'i' } },
            ];
        }
        if (foodType && foodType !== 'all') {
            baseMatch.foodType = foodType;
        }
        const locationMatch = {};
        if (city)
            locationMatch['hotel.address.city'] = String(city);
        if (state)
            locationMatch['hotel.address.state'] = String(state);
        const pipeline = [
            { $match: baseMatch },
            {
                $lookup: {
                    from: 'users',
                    localField: 'hotel',
                    foreignField: '_id',
                    as: 'hotel',
                },
            },
            { $unwind: '$hotel' },
        ];
        if (Object.keys(locationMatch).length > 0) {
            pipeline.push({ $match: locationMatch });
        }
        pipeline.push({ $sort: { createdAt: -1 } }, {
            $facet: {
                items: [
                    { $skip: (pageNum - 1) * limitNum },
                    { $limit: limitNum },
                ],
                totalCount: [
                    { $count: 'count' },
                ],
            },
        }, {
            $project: {
                items: 1,
                total: { $ifNull: [{ $arrayElemAt: ['$totalCount.count', 0] }, 0] },
            },
        });
        const aggResult = await Listing_1.default.aggregate(pipeline);
        const { items, total } = aggResult[0] || { items: [], total: 0 };
        res.json({
            listings: items,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                pages: Math.ceil(total / limitNum) || 1,
            },
        });
    }
    catch (error) {
        console.error('Get available listings error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getAvailableListings = getAvailableListings;
// Get listings for a specific hotel
const getHotelListings = async (req, res) => {
    try {
        const hotelId = req.user._id;
        const { status, page = 1, limit = 10 } = req.query;
        const query = { hotel: hotelId };
        if (status && status !== 'all') {
            query.status = status;
        }
        const listings = await Listing_1.default.find(query)
            .populate('claimedBy', 'organizationName contactPerson phone')
            .sort({ createdAt: -1 })
            .limit(Number(limit) * 1)
            .skip((Number(page) - 1) * Number(limit));
        const total = await Listing_1.default.countDocuments(query);
        res.json({
            listings,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Get hotel listings error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getHotelListings = getHotelListings;
// Get NGO claimed listings
const getNGOListings = async (req, res) => {
    try {
        const ngoId = req.user._id;
        const { page = 1, limit = 10 } = req.query;
        const listings = await Listing_1.default.find({
            claimedBy: ngoId,
            status: 'claimed'
        })
            .populate('hotel', 'organizationName phone address')
            .sort({ claimedAt: -1 })
            .limit(Number(limit) * 1)
            .skip((Number(page) - 1) * Number(limit));
        const total = await Listing_1.default.countDocuments({
            claimedBy: ngoId,
            status: 'claimed'
        });
        res.json({
            listings,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Get NGO listings error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getNGOListings = getNGOListings;
// Create a new listing (Hotels only)
const createListing = async (req, res) => {
    try {
        const hotelId = req.user._id;
        const { title, description, foodType, quantity, allergens, expiryDateTime, pickupLocation, availableFrom, availableUntil, images, specialInstructions } = req.body;
        const listing = new Listing_1.default({
            hotel: hotelId,
            title,
            description,
            foodType,
            quantity,
            allergens: allergens || [],
            expiryDateTime: new Date(expiryDateTime),
            pickupLocation,
            availableFrom: availableFrom ? new Date(availableFrom) : new Date(),
            availableUntil: new Date(availableUntil),
            images: images || [],
            specialInstructions
        });
        await listing.save();
        await listing.populate('hotel', 'organizationName phone address');
        res.status(201).json({
            message: 'Listing created successfully',
            listing
        });
    }
    catch (error) {
        console.error('Create listing error:', error);
        if (error instanceof Error && error.name === 'ValidationError') {
            const validationError = error; // Still need to cast for .errors
            const errors = Object.values(validationError.errors).map((err) => err.message);
            res.status(400).json({ message: 'Validation error', errors });
            return;
        }
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createListing = createListing;
// Update listing (Hotels only)
const updateListing = async (req, res) => {
    try {
        const { id } = req.params;
        const hotelId = req.user._id;
        const listing = await Listing_1.default.findById(id);
        if (!listing) {
            res.status(404).json({ message: 'Listing not found' });
            return;
        }
        // Check if the listing belongs to the hotel
        if (listing.hotel.toString() !== hotelId.toString()) {
            res.status(403).json({ message: 'Not authorized to update this listing' });
            return;
        }
        // Don't allow updates to claimed listings
        if (listing.status === 'claimed') {
            res.status(400).json({ message: 'Cannot update claimed listings' });
            return;
        }
        const updatedListing = await Listing_1.default.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true }).populate('hotel', 'organizationName phone address');
        res.json({
            message: 'Listing updated successfully',
            listing: updatedListing
        });
    }
    catch (error) {
        console.error('Update listing error:', error);
        if (error instanceof Error && error.name === 'ValidationError') {
            const validationError = error; // Still need to cast for .errors
            const errors = Object.values(validationError.errors).map((err) => err.message);
            res.status(400).json({ message: 'Validation error', errors });
            return;
        }
        res.status(500).json({ message: 'Server error' });
    }
};
exports.updateListing = updateListing;
// Delete listing (Hotels only)
const deleteListing = async (req, res) => {
    try {
        const { id } = req.params;
        const hotelId = req.user._id;
        const listing = await Listing_1.default.findById(id);
        if (!listing) {
            res.status(404).json({ message: 'Listing not found' });
            return;
        }
        // Check if the listing belongs to the hotel
        if (listing.hotel.toString() !== hotelId.toString()) {
            res.status(403).json({ message: 'Not authorized to delete this listing' });
            return;
        }
        await Listing_1.default.findByIdAndDelete(id);
        res.json({ message: 'Listing deleted successfully' });
    }
    catch (error) {
        console.error('Delete listing error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.deleteListing = deleteListing;
// Claim listing (NGOs only)
const claimListing = async (req, res) => {
    try {
        const { id } = req.params;
        const ngoId = req.user._id;
        const listing = await Listing_1.default.findById(id);
        if (!listing) {
            res.status(404).json({ message: 'Listing not found' });
            return;
        }
        if (listing.status !== 'available') {
            res.status(400).json({ message: 'Listing is no longer available' });
            return;
        }
        if (listing.availableUntil < new Date()) {
            res.status(400).json({ message: 'Listing has expired' });
            return;
        }
        const updatedListing = await Listing_1.default.findByIdAndUpdate(id, {
            status: 'claimed',
            claimedBy: ngoId,
            claimedAt: new Date()
        }, { new: true }).populate('hotel', 'organizationName phone address')
            .populate('claimedBy', 'organizationName contactPerson phone');
        res.json({
            message: 'Listing claimed successfully',
            listing: updatedListing
        });
    }
    catch (error) {
        console.error('Claim listing error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.claimListing = claimListing;
// Get single listing details
const getListingById = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing_1.default.findById(id)
            .populate('hotel', 'organizationName phone address')
            .populate('claimedBy', 'organizationName contactPerson phone');
        if (!listing) {
            res.status(404).json({ message: 'Listing not found' });
            return;
        }
        res.json({ listing });
    }
    catch (error) {
        console.error('Get listing by ID error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getListingById = getListingById;
//# sourceMappingURL=listingController.js.map