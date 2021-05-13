import { UserTo } from '../../to/UserTo';
import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
    return await UserService.findAll();
}

/**
 * @export
 * @returns {Promise < void >}
 */
export async function create(user: UserTo): Promise<void> {
    return await UserService.create(user);
}