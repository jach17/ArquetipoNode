import { UserTo } from "../../to/UserTo";
import UserService from "./service";

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
  return await UserService.findAll();
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistEmail(email?: string): Promise<void> {
  return await UserService.validateExistEmail(email);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user: UserTo): Promise<UserTo> {
  return await UserService.create(user);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function delete_user(idToDelete: number): Promise<void> {
  return await UserService.delete_user(idToDelete);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function update_user(
  idToUpdate: number,
  userTo: UserTo
): Promise<void> {
  return await UserService.update_user(idToUpdate, userTo);
}
