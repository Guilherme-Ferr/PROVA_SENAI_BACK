import { Request, Response } from "express";
import { DeleteBookService } from "../services/delete-book-service";

export class DeleteBookController {
  async handle(request: Request, response: Response) {
    const deleteBookService = new DeleteBookService();

    try {
      const { id } = request.params;
      if (!id) {
        return response
          .status(400)
          .json({ error: "Id do livro não fornecido" });
      }
      await deleteBookService.deleteBook(id);
      return response.status(200).send(id);
    } catch (error) {
      if (error.message == "not found") {
        return response.status(404).json({ error: "Livro não encontrado" });
      }
      return response.status(400).json({ error: "Parametros incorretos" });
    }
  }
}
