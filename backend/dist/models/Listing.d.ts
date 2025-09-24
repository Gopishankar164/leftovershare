import mongoose, { Document } from 'mongoose';
export interface IListing extends Document {
    hotel: mongoose.Types.ObjectId;
    title: string;
    description: string;
    foodType: 'prepared' | 'raw' | 'packaged' | 'mixed';
    quantity: {
        amount: number;
        unit: string;
    };
    allergens: string[];
    expiryDateTime: Date;
    pickupLocation: {
        address: string;
        instructions: string;
    };
    availableFrom: Date;
    availableUntil: Date;
    status: 'available' | 'claimed' | 'expired' | 'cancelled';
    claimedBy?: mongoose.Types.ObjectId;
    claimedAt?: Date;
    images: string[];
    specialInstructions?: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IListing, {}, {}, {}, mongoose.Document<unknown, {}, IListing, {}, {}> & IListing & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Listing.d.ts.map