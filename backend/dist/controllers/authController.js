"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.getProfile = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const jwt_1 = require("../config/jwt");
// Register a new user
const register = async (req, res) => {
    try {
        const { email, password, userType, organizationName, contactPerson, phone, address } = req.body;
        // Check if user already exists
        const existingUser = await User_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists with this email' });
            return;
        }
        // Create new user
        const user = new User_1.default({
            email,
            password,
            userType,
            organizationName,
            contactPerson,
            phone,
            address: {
                ...address,
                // Location will be added later via geocoding if needed
                // For now, we'll leave it undefined to avoid validation errors
            }
        });
        await user.save();
        // Generate token
        const token = (0, jwt_1.generateToken)(user);
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                email: user.email,
                userType: user.userType,
                organizationName: user.organizationName,
                contactPerson: user.contactPerson,
                phone: user.phone,
                address: user.address,
                isVerified: user.isVerified
            }
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
            return;
        }
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ message: 'Validation error', errors });
            return;
        }
        res.status(500).json({ message: 'Server error during registration' });
    }
};
exports.register = register;
// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            res.status(400).json({ message: 'Please provide email and password' });
            return;
        }
        // Check if user exists and include password for comparison
        const user = await User_1.default.findOne({ email }).select('+password');
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Check password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        if (!user.isVerified) {
            res.status(401).json({ message: 'Account not verified' });
            return;
        }
        // Generate token
        const token = (0, jwt_1.generateToken)(user);
        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                userType: user.userType,
                organizationName: user.organizationName,
                contactPerson: user.contactPerson,
                phone: user.phone,
                address: user.address,
                isVerified: user.isVerified
            }
        });
    }
    catch (error) {
        console.error('Login error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name,
            code: error.code
        });
        res.status(500).json({ message: 'Server error during login', details: process.env.NODE_ENV === 'development' ? error.message : undefined });
    }
};
exports.login = login;
// Get current user profile
const getProfile = async (req, res) => {
    try {
        const user = req.user;
        res.json({
            user: {
                id: user._id,
                email: user.email,
                userType: user.userType,
                organizationName: user.organizationName,
                contactPerson: user.contactPerson,
                phone: user.phone,
                address: user.address,
                isVerified: user.isVerified,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        });
    }
    catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getProfile = getProfile;
// Update user profile
const updateProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const { organizationName, contactPerson, phone, address } = req.body;
        const user = await User_1.default.findByIdAndUpdate(userId, {
            organizationName,
            contactPerson,
            phone,
            address
        }, {
            new: true,
            runValidators: true
        }).select('-password');
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json({
            message: 'Profile updated successfully',
            user: {
                id: user._id,
                email: user.email,
                userType: user.userType,
                organizationName: user.organizationName,
                contactPerson: user.contactPerson,
                phone: user.phone,
                address: user.address,
                isVerified: user.isVerified
            }
        });
    }
    catch (error) {
        console.error('Update profile error:', error);
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ message: 'Validation error', errors });
            return;
        }
        res.status(500).json({ message: 'Server error' });
    }
};
exports.updateProfile = updateProfile;
//# sourceMappingURL=authController.js.map