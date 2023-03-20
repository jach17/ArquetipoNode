import { Utils } from "../../commons/constants/utils/Utils";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";
import { ParametersError } from "../../config/error/index";

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
    Utils.required({ email: user.email });
    await UserService.validateExistEmail(user.email);
    let userResponse: UserTo = await UserService.create(user);
    return userResponse;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async delete_user(idToDelete: number): Promise<void> {
    try {
      await UserService.delete_user(idToDelete);
    } catch (error) {
      throw new ParametersError("No se pudo eliminar");
    }
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async update_user(idToUpdate: number, userTo: UserTo): Promise<void> {
    try {
      await UserService.update_user(idToUpdate, userTo);
    } catch (error) {
      throw new ParametersError("No se pudo actualizar");
    }
  },
};

export default UserFacade;
