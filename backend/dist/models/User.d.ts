import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    email: string;
    password: string;
    userType: 'hotel' | 'ngo';
    organizationName: string;
    contactPerson: string;
    phone: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(password: string): Promise<boolean>;
}
declare const _default: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=User.d.ts.map