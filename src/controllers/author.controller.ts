import { Request, Response, NextFunction } from "express";
import { AuthorService } from "../services/author.service";
import { StatusCode } from "../utils/consts/status-code";

export class AuthorController {
  private authorService: AuthorService;
  constructor() {
    this.authorService = new AuthorService();
  }
  async createAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await this.authorService.createAuthor(req.body);
      return res
        .status(StatusCode.Created)
        .send({ message: "Create Author Sucessfully", data: author });
    } catch (error) {
      next(error);
    }
  }
  async getAllAuthors(req: Request, res: Response, next: NextFunction) {
    try {
      const authors = await this.authorService.getAllAuthors();
      return res.status(StatusCode.OK).send({
        message: "Get All Authors Sucessfully",
        data: authors,
      });
    } catch (error) {
      next(error);
    }
  }
  async getAuthorById(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await this.authorService.getAuthorById(req.params.id);
      return res.status(StatusCode.OK).send({
        message: "Get Author By Id Sucessfully",
        data: author,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const author = await this.authorService.updateAuthor(
        req.params.id,
        req.body
      );
      return res
        .status(StatusCode.OK)
        .send({ message: "Update Author Sucessfully", data: author });
    } catch (error) {
      next(error);
    }
  }
  async deleteAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      await this.authorService.deleteAuthor(req.params.id);
      return res
        .status(StatusCode.OK)
        .send({ message: "Delete Author Sucessfully" });
    } catch (error) {
      next(error);
    }
  }
}
