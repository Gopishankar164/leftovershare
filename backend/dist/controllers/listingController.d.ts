import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
export declare const getAvailableListings: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getHotelListings: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getNGOListings: (req: AuthRequest, res: Response) => Promise<void>;
export declare const createListing: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateListing: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteListing: (req: AuthRequest, res: Response) => Promise<void>;
export declare const claimListing: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getListingById: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=listingController.d.ts.map