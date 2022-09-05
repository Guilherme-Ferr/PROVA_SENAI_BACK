import { BookRepository } from "../repositories/book-repository";

export class DeleteBookService {
  async deleteBook(book_id: number | string) {
    const bookRepository = new BookRepository();
    const bookId = await bookRepository.deleteBook(book_id);
    if (!bookId) throw new Error("not found");
  }
}
