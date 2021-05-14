import User from '../../models/User.model';
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

/**
 * @export
 * @returns {Promise < boolean >}
 */
export async function validate(user: UserTo): Promise<boolean> {
    return await UserService.validate(user);
}

/**
 * @export
 * @returns {Promise < [number, User[] >}
 */
export async function update(id: number, user: UserTo): Promise<[number, User[]]> {
    return await UserService.update(id, user);
}

/**
 * @export
 * @returns {Promise < number >}
 */
export async function deleteUser(id: number): Promise<number> {
    return await UserService.deleteUser(id);
}

/**
 * @export
 * @returns {Promise < number >}
 */
export async function validateDelete(user: any): Promise<void> {
    await UserService.validateDelete(user);
}