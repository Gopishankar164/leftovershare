import mongoose, { Document } from 'mongoose';
export interface IRequest extends Document {
    ngoRequester: mongoose.Types.ObjectId;
    listing: mongoose.Types.ObjectId;
    hotel: mongoose.Types.ObjectId;
    title: string;
    description: string;
    foodType: 'prepared' | 'raw' | 'packaged' | 'mixed';
    quantity: {
        amount: number;
        unit: string;
    };
    preferredPickup: {
        address: string;
        instructions?: string;
    };
    urgencyLevel: 'low' | 'medium' | 'high';
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IRequest, {}, {}, {}, mongoose.Document<unknown, {}, IRequest, {}, {}> & IRequest & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Request.d.ts.map