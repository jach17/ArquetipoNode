
import { Utils } from "../../commons/constants/utils/Utils";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let User = await UserService.findAll();
        return User;
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<UserTo> {
        Utils.required({email: user.email});
        await UserService.validateExistEmail(user.email);
        let userResponse: UserTo = await UserService.create(user);
        return userResponse;
    },
}



export default UserFacade;