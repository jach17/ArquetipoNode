import { IUserService } from "./interface";
import User from "../../models/User.model";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        return User.findAll();
    }
}

export default UserService;