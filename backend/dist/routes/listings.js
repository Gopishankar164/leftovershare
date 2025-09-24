"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listingController_1 = require("../controllers/listingController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Public routes (available listings for NGOs)
router.get('/available', auth_1.protect, (0, auth_1.authorize)('ngo'), listingController_1.getAvailableListings);
// Hotel routes
router.get('/hotel', auth_1.protect, (0, auth_1.authorize)('hotel'), listingController_1.getHotelListings);
router.post('/', auth_1.protect, (0, auth_1.authorize)('hotel'), listingController_1.createListing);
router.put('/:id', auth_1.protect, (0, auth_1.authorize)('hotel'), listingController_1.updateListing);
router.delete('/:id', auth_1.protect, (0, auth_1.authorize)('hotel'), listingController_1.deleteListing);
// NGO routes
router.get('/ngo/claimed', auth_1.protect, (0, auth_1.authorize)('ngo'), listingController_1.getNGOListings);
router.post('/:id/claim', auth_1.protect, (0, auth_1.authorize)('ngo'), listingController_1.claimListing);
// Shared routes
router.get('/:id', auth_1.protect, listingController_1.getListingById);
exports.default = router;
//# sourceMappingURL=listings.js.map