"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.protect = void 0;
const jwt_1 = require("../config/jwt");
const User_1 = __importDefault(require("../models/User"));
const protect = async (req, res, next) => {
    try {
        let token;
        // Check for token in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            res.status(401).json({ message: 'Not authorized, no token provided' });
            return;
        }
        try {
            // Verify token
            const decoded = (0, jwt_1.verifyToken)(token);
            // Get user from database
            const user = await User_1.default.findById(decoded.userId).select('-password');
            if (!user) {
                res.status(401).json({ message: 'Not authorized, user not found' });
                return;
            }
            if (!user.isVerified) {
                res.status(401).json({ message: 'Account not verified' });
                return;
            }
            req.user = user;
            next();
        }
        catch (error) {
            res.status(401).json({ message: 'Not authorized, invalid token' });
            return;
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
        return;
    }
};
exports.protect = protect;
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ message: 'Not authorized' });
            return;
        }
        if (!roles.includes(req.user.userType)) {
            res.status(403).json({
                message: `User role ${req.user.userType} is not authorized to access this route`
            });
            return;
        }
        next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=auth.js.map