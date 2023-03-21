import { RoleTo } from "../../to/RoleTo";
import RoleService from "./service";

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
  return await RoleService.create(role);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
  return await RoleService.findAll();
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function delete_role(idToDelete: number): Promise<void> {
  return await RoleService.delete_role(idToDelete);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function update_role(
  idToUpdate: number,
  roleTo: RoleTo
): Promise<void> {
  return await RoleService.update_role(idToUpdate, roleTo);
}
