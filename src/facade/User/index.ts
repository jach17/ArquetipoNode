import UserFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { UserTo } from '../../to/UserTo';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const User: any[] = await UserFacade.findAll();
        res.status(HttpStatusCode.OK).json(User);
    } catch (error) {
        next(error);
    }
}


/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let user: UserTo = { ...req.body };
        await UserFacade.create(user);
        res.status(HttpStatusCode.OK).json('ok');
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { query: { userId } = {} } = req
        let user: UserTo = { ...req.body };
        await UserFacade.update(Number(userId), user);
        res.status(HttpStatusCode.OK).json('ok');
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { query: { userId } = {} } = req
        await UserFacade.deleteUser({ id: userId });
        res.status(HttpStatusCode.OK).json('ok');
    } catch (error) {
        next(error);
    }
}