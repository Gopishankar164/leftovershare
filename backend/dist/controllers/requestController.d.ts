import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
export declare const createRequest: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getNGORequests: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getHotelRequests: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateRequestStatus: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=requestController.d.ts.map