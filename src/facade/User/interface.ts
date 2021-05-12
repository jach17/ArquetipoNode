
/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;
}