import { Response, Request, NextFunction, Router } from "express";
import { CategoryController } from "../controllers/category.controller";

export const categoryRoute = Router();
const categoryController = new CategoryController();

categoryRoute.post("/", (req: Request, res: Response, next: NextFunction) =>
  categoryController.createCategory(req, res, next)
);

categoryRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  categoryController.getAllCategories(req, res, next);
});
categoryRoute.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  categoryController.findCategoryById(req, res, next);
});

categoryRoute.patch(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    categoryController.updateCategory(req, res, next);
  }
);

categoryRoute.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    categoryController.deleteCategory(req, res, next);
  }
);
