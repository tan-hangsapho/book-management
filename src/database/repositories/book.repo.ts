import { IBook, IBookUpdate } from "../models/@types/book.type";
import { BookModel } from "../models/book.models";

export class BookRepository {
  async createBook(book: IBook) {
    try {
      return await BookModel.create(book);
    } catch (error) {
      throw error;
    }
  }
  async getAllBooks() {
    try {
      return await BookModel.find();
    } catch (error) {
      throw error;
    }
  }
  async getBookById(id: string) {
    try {
      return await BookModel.findById(id);
    } catch (error) {
      throw error;
    }
  }
  async updateBook(id: string, updatedBook: IBookUpdate) {
    try {
      return await BookModel.findByIdAndUpdate(id, updatedBook, { new: true });
    } catch (error) {
      throw error;
    }
  }
  async deleteBook(id: string) {
    try {
      return await BookModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}
