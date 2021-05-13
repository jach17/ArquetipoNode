import { IUserService } from "./interface";
import User from "../../models/User.model";
import { UserTo } from "../../to/UserTo";
import { Validate } from "sequelize-typescript";


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
        let userModel: User = await User.create(user);
        console.log('Usuario creado', userModel);
    },

    async validate(user: UserTo): Promise<boolean> {
        let flag: boolean = true;
        const { name } = user;
        console.log("name:", user);
        if (!name) {
            flag = false;
        }
        return flag;
    }
}

export default UserService;