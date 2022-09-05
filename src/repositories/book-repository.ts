import { knex } from "../main/configs/knex";
import { Book } from "../domain/entities/book-entities";

export class BookRepository {
  async listBooks() {
    return await knex<Book[]>("tbl_livro").select(
      "titulo",
      "preco",
      "imagem_grd",
      "imagem_peq",
      "detalhes"
    );
  }
  async createBook(book: Book) {
    return await knex("tbl_livro").insert(book);
  }
  async updateBook(book: Book, id: number | string) {
    return await knex("tbl_livro")
      .update({
        titulo: book.titulo,
        preco: book.preco,
        imagem_grd: book.imagem_grd,
        imagem_peq: book.imagem_peq,
        detalhes: book.detalhes,
      })
      .where("tbl_livro.cod_livro", id);
  }
  async deleteBook(id: number | string) {
    return await knex("tbl_livro").where("tbl_livro.cod_livro", id).del();
  }
}
