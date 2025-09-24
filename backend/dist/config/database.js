"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        // Try multiple MongoDB connection options
        const mongoURIs = [
            process.env.MONGODB_URI,
            'mongodb://127.0.0.1:27017/leftoversharewith',
            'mongodb://localhost:27017/leftoversharewith'
        ].filter(Boolean);
        let connected = false;
        for (const mongoURI of mongoURIs) {
            try {
                console.log(`Attempting to connect to MongoDB at: ${mongoURI}`);
                await mongoose_1.default.connect(mongoURI, {
                    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
                });
                console.log('✅ MongoDB Connected Successfully');
                connected = true;
                break;
            }
            catch (err) {
                console.log(`❌ Failed to connect to ${mongoURI}`);
            }
        }
        if (!connected) {
            console.log('⚠️  MongoDB connection failed - running without database');
            console.log('⚠️  Authentication and data persistence will not work');
            console.log('⚠️  Please install and start MongoDB to enable full functionality');
            return; // Don't exit, just continue without DB
        }
        mongoose_1.default.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });
        mongoose_1.default.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        console.log('⚠️  Continuing without database connection');
    }
};
exports.default = connectDB;
//# sourceMappingURL=database.js.map