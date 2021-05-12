process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";

describe('UserFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        User.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const User: any[] = await UserFacade.findAll();
            expect(1).equal(User.length);
        });
    });
});