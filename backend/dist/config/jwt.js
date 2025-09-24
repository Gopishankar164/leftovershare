"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (user) => {
    const payload = {
        userId: user._id.toString(),
        email: user.email,
        userType: user.userType
    };
    const secret = process.env.JWT_SECRET || 'your-fallback-secret-key';
    const expiresIn = process.env.JWT_EXPIRE || '7d';
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        const secret = process.env.JWT_SECRET || 'your-fallback-secret-key';
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        throw new Error('Invalid token');
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map