"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNearbyHotels = void 0;
const User_1 = __importDefault(require("../models/User"));
// NGO: Get nearby hotels based on NGO address (city/state)
const getNearbyHotels = async (req, res) => {
    try {
        const user = req.user;
        if (!user || user.userType !== 'ngo') {
            res.status(403).json({ message: 'Only NGOs can access nearby hotels' });
            return;
        }
        const { city, state, country, location } = user.address || {};
        const maxDistanceKm = Number(req.query?.maxDistanceKm || 10); // default 10 km
        // If NGO has coordinates, use geospatial search for hotels with coordinates
        if (location?.coordinates && location.coordinates.length === 2) {
            const [lng, lat] = location.coordinates;
            const meters = Math.max(1, Math.min(50000, Math.floor(maxDistanceKm * 1000))); // cap 50 km for safety
            const results = await User_1.default.aggregate([
                {
                    $geoNear: {
                        near: { type: 'Point', coordinates: [lng, lat] },
                        distanceField: 'distanceMeters',
                        spherical: true,
                        maxDistance: meters,
                        key: 'address.location',
                        query: { userType: 'hotel' },
                    },
                },
                {
                    $project: {
                        organizationName: 1,
                        contactPerson: 1,
                        phone: 1,
                        address: 1,
                        distanceMeters: 1,
                    },
                },
                { $limit: 100 },
            ]);
            res.json({ hotels: results, usedGeo: true });
            return;
        }
        // Fallback to city/state matching if no coordinates
        if (!city || !state) {
            res.status(400).json({ message: 'NGO address incomplete (city and state required or coordinates)' });
            return;
        }
        const hotels = await User_1.default.find({
            userType: 'hotel',
            'address.city': city,
            'address.state': state,
            ...(country ? { 'address.country': country } : {}),
        }).select('organizationName contactPerson phone address');
        res.json({ hotels, usedGeo: false });
    }
    catch (error) {
        console.error('Get nearby hotels error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getNearbyHotels = getNearbyHotels;
//# sourceMappingURL=hotelController.js.map