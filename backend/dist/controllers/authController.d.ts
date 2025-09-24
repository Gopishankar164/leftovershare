import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth';
export declare const register: (req: Request, res: Response) => Promise<void>;
export declare const login: (req: Request, res: Response) => Promise<void>;
export declare const getProfile: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateProfile: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=authController.d.ts.map