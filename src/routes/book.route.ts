import { Response, Request, NextFunction, Router } from "express";
import { BookController } from "../controllers/book.controller";

export const bookRoute = Router();
const bookController = new BookController();

bookRoute.post("/", (req: Request, res: Response, next: NextFunction) =>
  bookController.createBook(req, res, next)
);
bookRoute.get("/", (req: Request, res: Response, next: NextFunction) =>
  bookController.getAllBooks(req, res, next)
);
bookRoute.get("/:id", (req: Request, res: Response, next: NextFunction) =>
  bookController.getBookById(req, res, next)
);
bookRoute.put("/:id", (req: Request, res: Response, next: NextFunction) =>
  bookController.updateBook(req, res, next)
);
bookRoute.delete("/:id", (req: Request, res: Response, next: NextFunction) =>
  bookController.deleteBook(req, res, next)
);
