import RoleFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { UserTo } from '../../to/UserTo';
import { json } from 'sequelize/types';
import { logger } from '../../config/logger/logger';
import { RoleTo } from '../../to/RoleTo';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        let role: RoleTo = {...req.body};
        logger.info("(%s) - Request post: %s","roleRouter.ts",JSON.stringify(role))
        await RoleFacade.create(role);
        res.status(HttpStatusCode.OK).json(role);
    } catch (error) {
        next(error);
    }
}