import { Router } from "express";
import UserController from "../controllers/UserController";
import {
  userCreateSchema,
  validateUserCreate,
} from "../middlewares/validadeUserCreate.middleware";

const routes = Router();

routes.post(
  "/users",
  validateUserCreate(userCreateSchema),
  UserController.createUser
);
routes.get("/users", UserController.getAllUsers);
routes.get("/users/:id", UserController.getOneUser);
routes.patch("/users/:id", UserController.updateUserInformation);
routes.delete("/users/:id", UserController.deleteUser);

export default routes;
