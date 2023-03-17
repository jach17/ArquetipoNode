process.env.NODE_ENV = 'test'

import { expect } from "chai";
import { UserService } from "../../src/services";
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";

describe('UserService Test', () => {

  before('Init', async() => {
    await db.sync({ force: true});
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

  describe('FindAll', async() => {
    it('should return one user', async () => {
      const User: any[] = await UserService.findAll();
      expect(2).equal(User.length);
    });
  });

});