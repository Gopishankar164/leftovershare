"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const Listing_1 = __importDefault(require("../models/Listing"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const router = express_1.default.Router();
const sampleHotels = [
    {
        email: 'grandpalace@erode.com',
        password: 'password123',
        organizationName: 'Grand Palace Hotel',
        contactPerson: 'Rajesh Kumar',
        phone: '+91 9876543210',
        address: {
            street: '123 Perundurai Road',
            city: 'Erode',
            state: 'Tamil Nadu',
            zipCode: '638001',
            country: 'India'
        }
    },
    {
        email: 'royalinn@erode.com',
        password: 'password123',
        organizationName: 'Royal Inn Restaurant',
        contactPerson: 'Priya Sharma',
        phone: '+91 9876543211',
        address: {
            street: '456 Bhavani Road',
            city: 'Erode',
            state: 'Tamil Nadu',
            zipCode: '638002',
            country: 'India'
        }
    },
    {
        email: 'spicegardenhotel@erode.com',
        password: 'password123',
        organizationName: 'Spice Garden Hotel',
        contactPerson: 'Murugan Ravi',
        phone: '+91 9876543212',
        address: {
            street: '789 Sathy Road',
            city: 'Erode',
            state: 'Tamil Nadu',
            zipCode: '638003',
            country: 'India'
        }
    },
    {
        email: 'heritage@namakkal.com',
        password: 'password123',
        organizationName: 'Heritage Resort',
        contactPerson: 'Lakshmi Devi',
        phone: '+91 9876543213',
        address: {
            street: '321 Salem Road',
            city: 'Namakkal',
            state: 'Tamil Nadu',
            zipCode: '637001',
            country: 'India'
        }
    },
    {
        email: 'goldencrown@namakkal.com',
        password: 'password123',
        organizationName: 'Golden Crown Restaurant',
        contactPerson: 'Senthil Kumar',
        phone: '+91 9876543214',
        address: {
            street: '654 Tiruchengode Road',
            city: 'Namakkal',
            state: 'Tamil Nadu',
            zipCode: '637002',
            country: 'India'
        }
    },
    {
        email: 'hillview@namakkal.com',
        password: 'password123',
        organizationName: 'Hill View Hotel',
        contactPerson: 'Kavitha Raj',
        phone: '+91 9876543215',
        address: {
            street: '987 Kolli Hills Road',
            city: 'Namakkal',
            state: 'Tamil Nadu',
            zipCode: '637003',
            country: 'India'
        }
    },
    {
        email: 'tastypalace@erode.com',
        password: 'password123',
        organizationName: 'Tasty Palace',
        contactPerson: 'Arjun Patel',
        phone: '+91 9876543216',
        address: {
            street: '147 Gobichettipalayam Road',
            city: 'Erode',
            state: 'Tamil Nadu',
            zipCode: '638004',
            country: 'India'
        }
    },
    {
        email: 'southernspice@namakkal.com',
        password: 'password123',
        organizationName: 'Southern Spice Hotel',
        contactPerson: 'Meera Krishnan',
        phone: '+91 9876543217',
        address: {
            street: '258 Rasipuram Road',
            city: 'Namakkal',
            state: 'Tamil Nadu',
            zipCode: '637004',
            country: 'India'
        }
    }
];
const generateListings = (hotelId, hotelName, city) => {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    const dayAfterTomorrow = new Date(currentDate);
    dayAfterTomorrow.setDate(currentDate.getDate() + 2);
    const listings = [
        {
            title: 'Fresh Vegetable Biryani',
            description: 'Aromatic basmati rice cooked with fresh vegetables and traditional spices. Perfect for 20-25 people.',
            foodType: 'prepared',
            quantity: { amount: 25, unit: 'servings' },
            allergens: ['nuts'],
            expiryDateTime: tomorrow,
            pickupLocation: {
                address: `${hotelName}, ${city}`,
                instructions: 'Please come to the main kitchen entrance'
            },
            availableFrom: currentDate,
            availableUntil: tomorrow,
            specialInstructions: 'Food is kept warm and ready for pickup',
            hotel: hotelId
        },
        {
            title: 'Mixed Dal Curry',
            description: 'Nutritious mixed lentil curry with vegetables. Healthy and filling meal.',
            foodType: 'prepared',
            quantity: { amount: 15, unit: 'servings' },
            allergens: [],
            expiryDateTime: dayAfterTomorrow,
            pickupLocation: {
                address: `${hotelName}, ${city}`,
                instructions: 'Contact reception desk'
            },
            availableFrom: currentDate,
            availableUntil: dayAfterTomorrow,
            specialInstructions: 'Comes with rice and pickle',
            hotel: hotelId
        }
    ];
    // Add random third listing for some hotels
    if (Math.random() > 0.5) {
        listings.push({
            title: 'Sambar Rice',
            description: 'Traditional South Indian sambar rice with vegetables and tamarind.',
            foodType: 'prepared',
            quantity: { amount: 30, unit: 'servings' },
            allergens: [],
            expiryDateTime: tomorrow,
            pickupLocation: {
                address: `${hotelName}, ${city}`,
                instructions: 'Use back entrance near parking'
            },
            availableFrom: currentDate,
            availableUntil: tomorrow,
            specialInstructions: 'Served with papad and pickle',
            hotel: hotelId
        });
    }
    return listings;
};
router.post('/hotels', async (req, res) => {
    try {
        console.log('🌱 Starting to seed hotel data...');
        // Clear existing hotel data
        await User_1.default.deleteMany({ userType: 'hotel' });
        await Listing_1.default.deleteMany({});
        console.log('✅ Cleared existing hotel data');
        // Create hotels
        const createdHotels = [];
        for (const hotelData of sampleHotels) {
            const salt = await bcryptjs_1.default.genSalt(12);
            const hashedPassword = await bcryptjs_1.default.hash(hotelData.password, salt);
            const hotel = new User_1.default({
                ...hotelData,
                password: hashedPassword,
                userType: 'hotel'
            });
            const savedHotel = await hotel.save();
            createdHotels.push(savedHotel);
            console.log(`✅ Created hotel: ${hotelData.organizationName}`);
        }
        // Create listings for each hotel
        let totalListings = 0;
        for (const hotel of createdHotels) {
            const listings = generateListings(hotel._id, hotel.organizationName, hotel.address.city);
            for (const listingData of listings) {
                const listing = new Listing_1.default(listingData);
                await listing.save();
                totalListings++;
            }
            console.log(`✅ Created ${listings.length} listings for ${hotel.organizationName}`);
        }
        res.json({
            success: true,
            message: `Successfully seeded ${createdHotels.length} hotels and ${totalListings} food listings!`,
            data: {
                hotels: createdHotels.length,
                listings: totalListings,
                locations: ['Erode: 4 hotels', 'Namakkal: 4 hotels']
            }
        });
    }
    catch (error) {
        console.error('❌ Error seeding data:', error);
        res.status(500).json({
            success: false,
            message: 'Error seeding hotel data',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=seed.js.map