import { DataFields } from "../domain/entities/login-entities";
import { User } from "../domain/entities/user-entities";
import sha256 from "sha256";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repositories/user-repository";

export class LoginService {
  async authenticate(data: DataFields) {
    const userRepository = new UserRepository();
    const user = await userRepository.findByUsernameAndPassword(
      data.username,
      sha256(data.password)
    );
    if (!user) throw new Error("User not found");
    return user;
  }

  async createToken(user: User) {
    const token = sign({ user }, "SENAI_TOKEN_KEY", { expiresIn: "30h" });
    return token;
  }
}
