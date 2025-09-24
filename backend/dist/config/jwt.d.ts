import { IUser } from '../models/User';
export interface JwtPayload {
    userId: string;
    email: string;
    userType: 'hotel' | 'ngo';
}
export declare const generateToken: (user: IUser) => string;
export declare const verifyToken: (token: string) => JwtPayload;
//# sourceMappingURL=jwt.d.ts.map