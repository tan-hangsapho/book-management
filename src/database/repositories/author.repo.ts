import { IAuthor } from "../models/@types/author.type";
import { AuthorModel } from "../models/author.model";

export class AuthorRepository {
  // Implement CRUD operations for Authors
  async createAuthor(author: IAuthor) {
    try {
      return await AuthorModel.create(author);
    } catch (error) {
      throw error;
    }
  }
  async getAllAuthors() {
    try {
      return await AuthorModel.find({});
    } catch (error) {}
  }
  async getAuthorById(id: string) {
    try {
      return await AuthorModel.findById(id);
    } catch (error) {
      throw error;
    }
  }
  async updateAuthor(id: string, updatedAuthor: IAuthor) {
    try {
      return await AuthorModel.findByIdAndUpdate(id, updatedAuthor, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
  async deleteAuthor(id: string) {
    try {
      return await AuthorModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}
