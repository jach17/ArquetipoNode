import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import * as Kafka from "../../config/stream/kafka";
import { RoleTo } from "../../to/RoleTo";
import { ParametersError } from "../../config/error";
import { create } from "lodash";
import Roles from "../../models/Role.model";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {
  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */

  async create(role: RoleTo): Promise<RoleTo> {
    let roleModel = await Roles.create(role);
    return roleModel;
  },
  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */

  async findAll(): Promise<any[]> {
    let roleResponse = await Roles.findAll();
    return roleResponse;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */

  async delete_role(idToDelete: number): Promise<void> {
    try {
      let result = Roles.destroy({
        where: {
          id: idToDelete,
        },
      });
      console.log("Result on service: ", result);
    } catch (error) {
      console.log("Error on service: ", error);
      throw new ParametersError("No se pudo eliminar");
    }
  },
  async update_role(idToUpdate: number, roleTo: RoleTo): Promise<void> {
    try {
      let result = await Roles.update(roleTo, { where: { id: idToUpdate } });
      console.log("Result on service update: ", result);
    } catch (error) {
      console.log("Error on service update ", error);
      throw new ParametersError("No se pudo actualizar");
    }
  },
};

export default RoleService;
