import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import * as Kafka from "../../config/stream/kafka"
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
        let roleModel = await Roles.create(role)
        return roleModel
    }
}

export default RoleService;