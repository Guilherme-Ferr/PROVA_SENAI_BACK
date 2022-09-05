import { Request, Response } from "express";
import { Book } from "../domain/entities/book-entities";
import { UpdateBookService } from "../services/update-book-service";

export class UpdateBookController {
  async handle(request: Request, response: Response) {
    const updateBookService = new UpdateBookService();

    try {
      const { id } = request.params;
      if (!id) {
        return response
          .status(400)
          .json({ error: "Id do livro não fornecido" });
      }
      const data: Book = request.body;
      const bookId = await updateBookService.updateBook(data, id);
      return response.status(200).send(bookId);
    } catch (error) {
      if (error.message == "not found") {
        return response.status(404).json({ error: "Livro não encontrado" });
      }
      return response.status(400).json({ error: "Parametros incorretos" });
    }
  }
}
