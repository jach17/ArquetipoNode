import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {
  /**
   * @returns {Promise<any[]>}
   * @memberof IRoleFacade
   */
  create(role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IRoleFacade
   */
  findAll(): Promise<any[]>;
}
