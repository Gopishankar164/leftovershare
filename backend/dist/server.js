"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const auth_1 = __importDefault(require("./routes/auth"));
const listings_1 = __importDefault(require("./routes/listings"));
const requests_1 = __importDefault(require("./routes/requests"));
const hotels_1 = __importDefault(require("./routes/hotels"));
const seed_1 = __importDefault(require("./routes/seed"));
// Load environment variables
dotenv_1.default.config();
// Create Express app
const app = (0, express_1.default)();
// Security middleware
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            ...helmet_1.default.contentSecurityPolicy.getDefaultDirectives(),
            'script-src': ["'self'", "'unsafe-eval'"],
        },
    },
}));
app.use((0, cors_1.default)({
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:3000',
        'http://127.0.0.1:53206', // Browser preview URL
        /^http:\/\/127\.0\.0\.1:\d+$/, // Allow any 127.0.0.1 port for browser previews
        /^http:\/\/localhost:\d+$/ // Allow any localhost port
    ],
    credentials: true
}));
// Logging middleware
if (process.env.NODE_ENV !== 'production') {
    app.use((0, morgan_1.default)('dev'));
}
// Body parsing middleware
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// Connect to database
(0, database_1.default)();
// Health check route
app.get('/health', (req, res) => {
    res.json({
        message: 'LeftoverShareWith API is running!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});
// API routes
app.use('/api/auth', auth_1.default);
app.use('/api/listings', listings_1.default);
app.use('/api/requests', requests_1.default);
app.use('/api/hotels', hotels_1.default);
app.use('/api/seed', seed_1.default);
// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Route not found',
        path: req.originalUrl
    });
});
// Global error handler
app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    });
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map