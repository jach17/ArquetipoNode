import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka"
import { UserTo } from "../../to/UserTo";
import { ParametersError } from "../../config/error";
import { create } from "lodash";
import Users from "../../models/User.model";

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
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return User.findAll();
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async validateExistEmail(email: string): Promise<void> {
        let user = await User.findAll({
            where: {
                email: email
            }
        })

        if (user.length > 0){
            throw new ParametersError("El usuario ya existe")
        }
    },

    async create(user: UserTo): Promise<Users> {
        let userModel = await User.create(user)
        return userModel
    }
}

export default UserService;