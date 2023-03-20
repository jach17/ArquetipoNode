process.env.NODE_ENV = "test";

import { expect } from "chai";
import UserFacade from "../../src/facade/User/facade";
import { db } from "../../src/config/connection/database";
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";

describe("UserFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
    User.create({
      id: 1,
      name: "test",
      email: "test@axity.com",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
    });
  });

  describe("FindAll", () => {
    it("should return one user", async () => {
      const User: any[] = await UserFacade.findAll();
      expect(1).equal(User.length);
    });
  });

  describe("Create", () => {
    it("should return one user", async () => {
      let userTo: UserTo = {
        name: "Juan",
        email: "jared@axity.com",
      };
      const user: UserTo = await UserFacade.create(userTo);
      expect(user.email).equal("jared@axity.com");
    });
  });

  describe("Create Error", () => {
    it("should return one user", async () => {
      let userTo: UserTo = {
        name: "Juan",
        email: "jared@axity.com",
      };
      try {
        await UserFacade.create(userTo);
      } catch (error) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });

  describe("Create Error atributes required", () => {
    it("should return error -> attributes required", async () => {
      let userTo: UserTo = {
        name: "Juan",
      };
      try {
        await UserFacade.create(userTo);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal("El atributo email es requerido");
      }
    });
  });

  describe("Delete", () => {
    it("should return id deleted", async () => {
      let idToDelete: number = 999;
      try {
        await UserFacade.delete_user(idToDelete);
        //Expect como el de update
      } catch (error) {
        expect(error).equal(new ParametersError("No se pudo eliminar"));
      }
    });
  });

  describe("Update", () => {
    it("should return id updated", async () => {
      let idToUpdate: number = 2;
      let userTo: UserTo = {
        name: "Alex",
      };
      try {
        await UserFacade.update_user(idToUpdate, userTo);
        //expect(result).instanceOf(Promise<void>);
      } catch (error) {
        expect(error).equal(new ParametersError("No se pudo actualizar"));
      }
    });
  });
});
