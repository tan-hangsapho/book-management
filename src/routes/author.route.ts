import { Response, Request, NextFunction, Router } from "express";
import { AuthorController } from "../controllers/author.controller";

export const authorRoute = Router();
const authorController = new AuthorController();

authorRoute.post("/", (req: Request, res: Response, next: NextFunction) =>
  authorController.createAuthor(req, res, next)
);

authorRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  authorController.getAllAuthors(req, res, next);
});
authorRoute.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  authorController.getAuthorById(req, res, next);
});

authorRoute.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
  authorController.updateAuthor(req, res, next);
});

authorRoute.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    authorController.deleteAuthor(req, res, next);
  }
);
