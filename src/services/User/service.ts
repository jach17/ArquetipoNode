import { IUserService } from "./interface";
import User from "../../models/User.model";
import { UserTo } from "../../to/UserTo";


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
    },

    async create(user: UserTo): Promise<void> {
        let userModel: any = { ...user }
        await User.create(userModel);
    }
}

export default UserService;