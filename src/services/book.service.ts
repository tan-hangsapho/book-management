import { IBook, IBookUpdate } from "../database/models/@types/book.type";
import { BookRepository } from "../database/repositories/book.repo";
import APIError from "../errors/api-error";
import { StatusCode } from "../utils/consts/status-code";

export class BookSerice {
  private bookRepository: BookRepository;
  constructor() {
    this.bookRepository = new BookRepository();
  }
  async createBook(books: IBook) {
    try {
      return await this.bookRepository.createBook(books);
    } catch (error) {
      throw error;
    }
  }
  async getAllBooks() {
    try {
      const books = await this.bookRepository.getAllBooks();
      if (!books) {
        throw new APIError("No books found", StatusCode.NotFound);
      }

      return books;
    } catch (error) {
      throw error;
    }
  }
  async getBookById(id: string) {
    try {
      const book = await this.bookRepository.getBookById(id);
      if (!book) {
        throw new APIError("Book not found", StatusCode.NotFound);
      }
      return book;
    } catch (error: any) {
      throw error;
    }
  }
  async updateBook(id: string, updateBook: IBookUpdate) {
    try {
      const findBook = await this.bookRepository.getBookById(id);
      if (!findBook) {
        throw new APIError("Book not found", StatusCode.NotFound);
      }
      const updatedBook = await this.bookRepository.updateBook(id, updateBook);
      if (!updatedBook) {
        throw new APIError(
          "Failed to update book",
          StatusCode.InternalServerError
        );
      }
      return updatedBook;
    } catch (error) {
      throw error;
    }
  }
  async deleteBook(id: string) {
    try {
      const findBook = await this.bookRepository.getBookById(id);
      if (!findBook) {
        throw new APIError("Book not found", StatusCode.NotFound);
      }
      return await this.bookRepository.deleteBook(id);
    } catch (error) {
      throw error;
    }
  }
}
