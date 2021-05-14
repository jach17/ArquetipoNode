import { IUserService } from "./interface";
import User from "../../models/User.model";
import { UserTo } from "../../to/UserTo";
import { Op } from "sequelize";
import { ParametersError } from "../../config/error";


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
    },

    async update(id: number, userTO: UserTo): Promise<[number, User[]]> {
        return await User.update(userTO, {
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
    },

    async deleteUser(id: number): Promise<number> {
        return await User.destroy({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
    },

    async validateDelete(user: any): Promise<void> {
        const { id } = user;
        if (!id) {
            throw new ParametersError('id is required')
        }
        if (isNaN(id)) {
            throw new ParametersError('id is number')
        }

    }


}

export default UserService;