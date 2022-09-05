import { BookRepository } from "../repositories/book-repository";
import { Book } from "../domain/entities/book-entities";

export class ListBooksService {
  async listBooks() {
    const bookRepository = new BookRepository();
    const books: Book[] = await bookRepository.listBooks();
    if (!books.length) throw new Error("No books found");
    return books;
  }
}
