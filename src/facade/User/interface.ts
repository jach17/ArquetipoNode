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
  update_user(idToUpdate: number, userTo: UserTo): Promise<void>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  publish_delete_user(id: number): Promise<void>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  consumer_delete_user(idToDelete: number): Promise<void>;
}
