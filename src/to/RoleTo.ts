
/**
 * @export
 * @class RoleTo
 *
 * @swagger
 * components:
 *  schemas:
 *    RoleTo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: id of Role
 *          example: 1
 *        name:
 *          type: string
 *          description: name of Role
 *          example: Admin
 */
export class RoleTo {
    id?: number;
    name?: string;
}