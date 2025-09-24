"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRequestStatus = exports.getHotelRequests = exports.getNGORequests = exports.createRequest = void 0;
const Request_1 = __importDefault(require("../models/Request"));
const Listing_1 = __importDefault(require("../models/Listing"));
// NGO: Create a request for a listing
const createRequest = async (req, res) => {
    try {
        const ngoId = req.user._id;
        const { listingId, title, description, foodType, quantity, preferredPickup, urgencyLevel } = req.body;
        if (!listingId) {
            res.status(400).json({ message: 'listingId is required' });
            return;
        }
        const listing = await Listing_1.default.findById(listingId).populate('hotel', '_id');
        if (!listing) {
            res.status(404).json({ message: 'Listing not found' });
            return;
        }
        if (listing.status !== 'available') {
            res.status(400).json({ message: 'Listing is not available for requests' });
            return;
        }
        const reqDoc = await Request_1.default.create({
            ngoRequester: ngoId,
            listing: listing._id,
            hotel: listing.hotel._id,
            title: title || listing.title,
            description: description || listing.description,
            foodType: foodType || listing.foodType,
            quantity: quantity || listing.quantity,
            preferredPickup: preferredPickup || { address: listing.pickupLocation.address },
            urgencyLevel: urgencyLevel || 'medium',
        });
        const populated = await reqDoc.populate([
            { path: 'ngoRequester', select: 'organizationName contactPerson phone' },
            { path: 'hotel', select: 'organizationName phone' },
            { path: 'listing' },
        ]);
        res.status(201).json({ message: 'Request created successfully', request: populated });
    }
    catch (error) {
        console.error('Create request error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createRequest = createRequest;
// NGO: Get own requests
const getNGORequests = async (req, res) => {
    try {
        const ngoId = req.user._id;
        const { status, page = 1, limit = 10 } = req.query;
        const query = { ngoRequester: ngoId };
        if (status && status !== 'all')
            query.status = status;
        const requests = await Request_1.default.find(query)
            .populate('hotel', 'organizationName phone')
            .populate('listing')
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));
        const total = await Request_1.default.countDocuments(query);
        res.json({
            requests,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Get NGO requests error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getNGORequests = getNGORequests;
// Hotel: Get incoming requests
const getHotelRequests = async (req, res) => {
    try {
        const hotelId = req.user._id;
        const { status, page = 1, limit = 10 } = req.query;
        const query = { hotel: hotelId };
        if (status && status !== 'all')
            query.status = status;
        const requests = await Request_1.default.find(query)
            .populate('ngoRequester', 'organizationName contactPerson phone')
            .populate('listing')
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));
        const total = await Request_1.default.countDocuments(query);
        res.json({
            requests,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Get Hotel requests error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getHotelRequests = getHotelRequests;
// Hotel: Update request status (accept/reject)
const updateRequestStatus = async (req, res) => {
    try {
        console.log('🔍 Starting updateRequestStatus');
        const hotelId = req.user._id;
        const { id } = req.params;
        const { status } = req.body;
        console.log('📝 Request params:', { id, status, hotelId });
        if (!['accepted', 'rejected'].includes(status)) {
            console.log('❌ Invalid status:', status);
            res.status(400).json({ message: 'Invalid status' });
            return;
        }
        console.log('🔍 Finding request by ID:', id);
        const requestDoc = await Request_1.default.findById(id);
        if (!requestDoc) {
            console.log('❌ Request not found');
            res.status(404).json({ message: 'Request not found' });
            return;
        }
        console.log('✅ Request found:', requestDoc._id);
        if (requestDoc.hotel.toString() !== hotelId.toString()) {
            console.log('❌ Not authorized - hotel mismatch');
            res.status(403).json({ message: 'Not authorized to update this request' });
            return;
        }
        if (requestDoc.status !== 'pending') {
            console.log('❌ Request already actioned:', requestDoc.status);
            res.status(400).json({ message: 'Request has already been actioned.' });
            return;
        }
        // If accept, mark listing as claimed by this NGO
        if (status === 'accepted') {
            console.log('🔍 Finding listing for acceptance:', requestDoc.listing);
            const listing = await Listing_1.default.findById(requestDoc.listing);
            if (!listing) {
                console.log('❌ Listing not found');
                res.status(404).json({ message: 'Associated listing not found' });
                return;
            }
            if (listing.status !== 'available') {
                console.log('❌ Listing not available:', listing.status);
                res.status(400).json({ message: 'Listing is no longer available to be claimed' });
                return;
            }
            console.log('📝 Updating listing status to claimed');
            listing.status = 'claimed';
            listing.claimedBy = requestDoc.ngoRequester;
            listing.claimedAt = new Date();
            console.log('💾 Saving listing...');
            await listing.save();
            console.log('✅ Listing saved successfully');
        }
        console.log('📝 Updating request status to:', status);
        requestDoc.status = status;
        console.log('💾 Saving request...');
        await requestDoc.save();
        console.log('✅ Request saved successfully');
        console.log('🔍 Populating request data...');
        const populated = await requestDoc.populate([
            { path: 'ngoRequester', select: 'organizationName contactPerson phone' },
            { path: 'listing' }
        ]);
        console.log('✅ Population completed');
        res.json({ message: 'Request status updated', request: populated });
        console.log('✅ Response sent successfully');
    }
    catch (error) {
        console.error('❌ Update request status error:', error);
        console.error('❌ Error details:', {
            name: error instanceof Error ? error.name : 'Unknown',
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : 'No stack trace'
        });
        res.status(500).json({ message: 'Server error during request update' });
    }
};
exports.updateRequestStatus = updateRequestStatus;
//# sourceMappingURL=requestController.js.map