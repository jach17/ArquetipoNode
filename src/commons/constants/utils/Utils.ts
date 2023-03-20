import { ParametersError } from "../../../config/error";

export const Utils = {
    required: (o: any) => {
        Object.keys(o).forEach((key) => {
            if (o[key] === null || o[key] === undefined) {
                throw new ParametersError('El atributo ' + key + ' es requerido')
            }
        })
    }
}