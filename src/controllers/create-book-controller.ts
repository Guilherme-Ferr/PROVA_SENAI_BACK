import { Request, Response } from "express";
import { Book } from "../domain/entities/book-entities";
import { CreateBookService } from "../services/create-book-servie";

export class CreateBookController {
  async handle(request: Request, response: Response) {
    const createBookService = new CreateBookService();

    try {
      const data: Book = request.body;
      const bookId = await createBookService.createBook(data);
      return response.status(201).send(bookId);
    } catch (error) {
      return response.status(400).json({ error: "Parametros incorretos" });
    }
  }
}
