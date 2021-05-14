process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";

describe('UserFacade Test', () => {

    before('Init', async () => {
        await db.sync({ force: true });
        User.create({
            id: 1,
            name: 'test',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        });

        User.create({
            id: 2,
            name: 'test2',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        });
    });

    describe('FindAll', () => {
        it('should return one user', async () => {
            const User: any[] = await UserFacade.findAll();
            expect(2).equal(User.length);
        });
    });

    describe('Update', () => {
        it('should return one user', async () => {
            let user = {
                id: 0,
                name: 'Ricardo',
                email: 'rjaforever@gmail.com'
            }
            let response = await UserFacade.update(1, user);
            expect(response).equal(1);
        });
    });

    describe('Update NotFound Error', () => {
        it('should return one user', async () => {
            let user = {
                id: 0,
                name: 'Ricardo',
                email: 'rjaforever@gmail.com'
            }
            try {
                let response = await UserFacade.update(3, user);
            } catch (error) {
                console.error('El error es', error);
                expect(error.message).equals('user not found')
            }
        });
    });


    describe('Update Parameters Error', () => {
        it('should return one user', async () => {
            let user = {
                id: 0,
                email: 'rjaforever@gmail.com'
            }
            try {
                let response = await UserFacade.update(2, user);
            } catch (error) {
                expect(error.message).equals('name is required')
            }
        });
    });


    //tipo dato del id
    //id sea vacío
    //happy path
    //no existe el usuario a eliminar

    describe('Delete parameters error 1', () => {
        it('Error 1', async () => {
            try {
                let response = await UserFacade.deleteUser({ id: "rytr" });
            } catch (error) {
                expect(error.message).equals('id is number')
            }
        });
    });

    describe('Delete parameters error', () => {
        it('should return one user', async () => {
            try {
                let response = await UserFacade.deleteUser({});
            } catch (error) {
                expect(error.message).equals('id is required')
            }
        });
    });

    describe('Delete NotFount Error', () => {
        it('should return one user', async () => {
            try {
                let response = await UserFacade.deleteUser({ id: 14 });
            } catch (error) {
                expect(error.message).equals('user not found')
            }
        });
    });

    describe('Delete Happy path', () => {
        it('should return one user', async () => {
            let response = await UserFacade.deleteUser({ id: 2 });
            expect(response).equals(1)
        });
    });


});