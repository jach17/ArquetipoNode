import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {
  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  findAll(): Promise<any[]>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  create(user: UserTo): Promise<UserTo>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  delete_user(id: number): Promise<void>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  update_user(idToUpdate: number, userTo: UserTo): Promise<void>;
}
