import { Request, Response, NextFunction } from "express";
import { BookSerice } from "../services/book.service";
import { StatusCode } from "../utils/consts/status-code";

export class BookController {
  private bookService: BookSerice;

  constructor() {
    this.bookService = new BookSerice();
  }

  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await this.bookService.createBook(req.body);
      return res
        .status(StatusCode.Created)
        .send({ message: "Create Book Sucessfully", data: book });
    } catch (error) {
      next(error);
    }
  }

  async getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await this.bookService.getAllBooks();
      return res
        .status(StatusCode.OK)
        .send({ message: "Get All Book Sucessfully", data: books });
    } catch (error) {
      next(error);
    }
  }

  async getBookById(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await this.bookService.getBookById(req.params.id);
      return res
        .status(StatusCode.OK)
        .send({ message: "Get Book Sucessfully", data: book });
    } catch (error) {
      next(error);
    }
  }

  async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedBook = await this.bookService.updateBook(
        req.params.id,
        req.body
      );
      return res
        .status(StatusCode.OK)
        .send({ message: "Update book Sucessfully", data: updatedBook });
    } catch (error) {
      next(error);
    }
  }

  async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      await this.bookService.deleteBook(req.params.id);
      res
        .status(StatusCode.NoContent)
        .send({ message: "Deleted book Successfully" });
    } catch (error) {
      next(error);
    }
  }
}
