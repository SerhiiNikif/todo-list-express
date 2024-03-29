import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import createError from "../helpers/errors/createError";
import type { JwtPayload } from "jsonwebtoken"

import { IRequestWithUserId } from '../interfaces';

const isAuth = (req: IRequestWithUserId, res: Response, next: NextFunction): void => { 
    if (req.method === 'OPTIONS') {
        next()
    }
 
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw createError(401);
        }
  
        const { id, role } = jwt.verify(token, JWT_SECRET) as JwtPayload;

        req.userId = id;
        req.userRole = role;
        next();
    } catch (error: any) {
        console.log(error.message);
        throw createError(401);
    }
}

export default isAuth;