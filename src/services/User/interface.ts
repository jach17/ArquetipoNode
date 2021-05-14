import User from "../../models/User.model";
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

    create(user: UserTo): Promise<void>;

    validate(user: UserTo): Promise<boolean>;

    update(id: number, userTO: UserTo): Promise<[number, User[]]>;

    deleteUser(id: number): Promise<number>;

    validateDelete(user: any): Promise<void>;
}