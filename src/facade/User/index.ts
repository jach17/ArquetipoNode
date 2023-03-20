import UserFacade from "./facade";
import { NextFunction, Request, Response } from "express";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import { UserTo } from "../../to/UserTo";
import { json } from "sequelize/types";
import { logger } from "../../config/logger/logger";

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
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
export async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    let user: UserTo = { ...req.body };
    // logger.info("(%s) - Request post: %s","UserRouter.ts",JSON.stringify(user))
    await UserFacade.create(user);
    res.status(HttpStatusCode.OK).json(user);
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
export async function delete_user(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {
      params: { id },
    } = req;

    let result = await UserFacade.delete_user(+id);
    console.log(result);
    res.status(HttpStatusCode.OK).json("Deleted");
  } catch (error) {
    console.log("Error en facade: ", error);
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
export async function update_user(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {
      params: { id },
    } = req;
    let userTo: UserTo = { ...req.body };

    let result = await UserFacade.update_user(+id, userTo);
    console.log(result);
    res.status(HttpStatusCode.OK).json("Updated");
  } catch (error) {
    console.log("Error en facade update: ", error);
    next(error);
  }
}
