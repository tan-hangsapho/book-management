import { IAuthor } from "../database/models/@types/author.type";
import { AuthorRepository } from "../database/repositories/author.repo";
import APIError from "../errors/api-error";
import { StatusCode } from "../utils/consts/status-code";

export class AuthorService {
  private authRepo: AuthorRepository;
  constructor() {
    this.authRepo = new AuthorRepository();
  }
  async createAuthor(author: IAuthor) {
    try {
      return await this.authRepo.createAuthor(author);
    } catch (error) {
      throw error;
    }
  }
  async getAllAuthors() {
    try {
      return await this.authRepo.getAllAuthors();
    } catch (error) {
      throw error;
    }
  }
  async getAuthorById(id: string) {
    try {
      const author = await this.authRepo.getAuthorById(id);
      if (!author) {
        throw new APIError("Book not found", StatusCode.NotFound);
      }
      return author;
    } catch (error) {
      throw error;
    }
  }
  async updateAuthor(id: string, updatedAuthor: IAuthor) {
    try {
      const author = await this.authRepo.getAuthorById(id);
      if (!author) {
        throw new APIError("Book not found", StatusCode.NotFound);
      }
      const updateAuth = await this.authRepo.updateAuthor(id, updatedAuthor);
      if (!updateAuth) {
        throw new APIError(
          "Failed to update author",
          StatusCode.InternalServerError
        );
      }
      return author;
    } catch (error) {
      throw error;
    }
  }
  async deleteAuthor(id: string) {
    try {
      const author = await this.authRepo.getAuthorById(id);
      if (!author) {
        throw new APIError("Author not found", StatusCode.NotFound);
      }
      const deleteAuthor = await this.authRepo.deleteAuthor(id);
      if (!deleteAuthor) {
        throw new APIError(
          "Failed to delete author",
          StatusCode.InternalServerError
        );
      }
      return deleteAuthor;
    } catch (error) {
      throw error;
    }
  }
}
