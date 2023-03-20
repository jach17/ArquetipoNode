import Users from "../../models/User.model";
import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;

     /**
     * @returns {Promise<UserTo>}
     * @memberof IUserService
     */
     validateExistEmail(email?: string): Promise<void>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    create(user: UserTo): Promise<Users>
}