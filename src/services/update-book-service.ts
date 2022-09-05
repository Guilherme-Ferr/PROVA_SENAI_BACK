import { BookRepository } from "../repositories/book-repository";
import { Book } from "../domain/entities/book-entities";

export class UpdateBookService {
  async updateBook(data: Book, book_id: number | string) {
    const bookRepository = new BookRepository();
    const bookId = await bookRepository.updateBook(data, book_id);
    if (!bookId) throw new Error("not found");
    return bookId;
  }
}
