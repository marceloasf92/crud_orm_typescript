import { Request, Response } from "express";
import deleteUserService from "../services/user/deleteUser.service";
import userCreateService from "../services/user/userCreate.service";
import userListOneService from "../services/user/userListOne.service";
import usersListService from "../services/user/usersList.service";
import userUpdateService from "../services/user/userUpdate.service";

export default class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email, password, age } = req.newUser;

      const newUser = await userCreateService({ name, email, password, age });

      return res.status(201).send(newUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await usersListService();

      return res.json(users);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async getOneUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await userListOneService({ id });
      return res.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async updateUserInformation(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    try {
      const user = await userUpdateService({
        id,
        name,
        email,
        password,
        age,
      });

      return res.status(201).json({ message: "User updated with success!" });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userDeleted = await deleteUserService(id);
      return res.json({
        message: "User Deleted",
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }
}
