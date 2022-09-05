import { Request, Response } from "express";
import { Book } from "../domain/entities/book-entities";
import { ListBooksService } from "../services/list-books-servie";

export class ListBooksController {
  async handle(_: Request, response: Response) {
    const listBookService = new ListBooksService();

    try {
      const books: Book[] = await listBookService.listBooks();
      return response.status(200).send({ books });
    } catch (error) {
      return response.status(404).json({ error: "nenhum livro encontrado" });
    }
  }
}
