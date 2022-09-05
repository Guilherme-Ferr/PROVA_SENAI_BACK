import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";

export function tokenMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  if (!authToken)
    return response.status(401).json({ error: "Token não fornecido" });

  try {
    const [, token] = authToken.split(" ");
    verify(token, "SENAI_PRIVATE_KEY");
    next();
  } catch (error) {
    return response.status(401).json({ error: "Token invalido" });
  }
}
