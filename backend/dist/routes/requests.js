"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const requestController_1 = require("../controllers/requestController");
const router = express_1.default.Router();
// NGO routes
router.post('/', auth_1.protect, (0, auth_1.authorize)('ngo'), requestController_1.createRequest);
router.get('/ngo', auth_1.protect, (0, auth_1.authorize)('ngo'), requestController_1.getNGORequests);
// Hotel routes
router.get('/hotel', auth_1.protect, (0, auth_1.authorize)('hotel'), requestController_1.getHotelRequests);
router.patch('/:id/status', (req, res, next) => {
    console.log('🚀 PATCH /requests/:id/status route hit');
    console.log('📝 Route params:', req.params);
    console.log('📝 Route body:', req.body);
    next();
}, auth_1.protect, (0, auth_1.authorize)('hotel'), requestController_1.updateRequestStatus);
exports.default = router;
//# sourceMappingURL=requests.js.map