import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (name !== undefined)
    await userRepository.update(account!.id, { name: name });
  if (email !== undefined)
    await userRepository.update(account!.id, { email: email });
  if (age !== undefined) await userRepository.update(account!.id, { age: age });

  const equalPassword = bcrypt.compareSync(password || "", account!.password);
  if (equalPassword) throw new Error("Please try another password.");
  if (!equalPassword && password !== undefined) {
    const newPassword = bcrypt.hashSync(password, 10);
    await userRepository.update(account!.id, { password: newPassword });
  }

  await userRepository.update(account!.id, { updated_at: new Date() });

  return true;
};

export default userUpdateService;
