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
        let userMap: UserTo[] = [];
        User.forEach(v => {
            userMap.push({ id: v.id, name: v.name });
        });
        return userMap;
    },

    /**
     * @returns {Promise < void >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<void> {
        await UserService.create(user);
    }


}

export default UserFacade;