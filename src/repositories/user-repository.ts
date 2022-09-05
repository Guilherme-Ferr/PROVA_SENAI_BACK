import { knex } from "../main/configs/knex";
import { User } from "../domain/entities/user-entities";

export class UserRepository {
  async findByUsernameAndPassword(username: string, password: string) {
    return await knex<User>("users")
      .select("id", "username")
      .where("username", username)
      .andWhere("password", password)
      .first();
  }
}
