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
}
