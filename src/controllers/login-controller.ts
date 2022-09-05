import { Request, Response } from "express";
import { User } from "../domain/entities/user-entities";
import { DataFields } from "../domain/entities/login-entities";
import { LoginService } from "../services/login-service";

export class LoginController {
  async handle(request: Request, response: Response) {
    const loginService = new LoginService();

    try {
      const data: DataFields = request.body;
      const user: User = await loginService.authenticate(data);
      const token: string = await loginService.createToken(user);
      return response.status(200).send({ token });
    } catch (error) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }
  }
}
