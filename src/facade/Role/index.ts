import RoleFacade from "./facade";
import { NextFunction, Request, Response } from "express";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import { UserTo } from "../../to/UserTo";
import { json } from "sequelize/types";
import { logger } from "../../config/logger/logger";
import { RoleTo } from "../../to/RoleTo";

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
    let role: RoleTo = { ...req.body };
    logger.info(
      "(%s) - Request post: %s",
      "roleRouter.ts",
      JSON.stringify(role)
    );
    await RoleFacade.create(role);
    res.status(HttpStatusCode.OK).json(role);
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
export async function findAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const roles: any[] = await RoleFacade.findAll();
    res.status(HttpStatusCode.OK).json(roles);
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
export async function delete_role(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {
      params: { id },
    } = req;

    let result = await RoleFacade.delete_role(Number(id));
    console.log(result);
    res.status(HttpStatusCode.OK).json("Deleted");
  } catch (error) {
    console.log("Error en facade: ", error);
    next(error);
  }
}
