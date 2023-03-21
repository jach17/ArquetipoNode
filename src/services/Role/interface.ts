import Roles from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {
  /**
   * @returns {Promise<any[]>}
   * @memberof IRoleService
   */
  create(role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IRoleService
   */
  findAll(): Promise<any[]>;
  /**
   * @returns {Promise<any[]>}
   * @memberof IRoleService
   */
  delete_role(idToDelete: number): Promise<void>;
  /**
   * @returns {Promise<any[]>}
   * @memberof IRoleService
   */
  update_role(idToUpdate: number, roleTo: RoleTo): Promise<void>;
}
