import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";

const userListOneService = async ({ id }: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);
  if (!user) throw new Error("User not found!");

  return user;
};

export default userListOneService;
