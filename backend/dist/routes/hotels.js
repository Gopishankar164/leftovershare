"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const hotelController_1 = require("../controllers/hotelController");
const router = express_1.default.Router();
// NGO: Get nearby hotels based on NGO saved address
router.get('/nearby', auth_1.protect, (0, auth_1.authorize)('ngo'), hotelController_1.getNearbyHotels);
exports.default = router;
//# sourceMappingURL=hotels.js.map