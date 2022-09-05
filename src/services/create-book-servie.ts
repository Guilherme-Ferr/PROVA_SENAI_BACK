import { BookRepository } from "../repositories/book-repository";
import { Book } from "../domain/entities/book-entities";

export class CreateBookService {
  async createBook(data: Book) {
    const bookRepository = new BookRepository();
    const bookId = await bookRepository.createBook(data);
    if (!bookId) throw new Error("Parametros incorretos");
    return bookId;
  }
}
