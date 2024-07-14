import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../services/category.service";
import { StatusCode } from "../utils/consts/status-code";

export class CategoryController {
  private categoryService: CategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }
  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.categoryService.createCategory(req.body);
      return res
        .status(StatusCode.Created)
        .send({ message: "Create Category Sucessfully", data: category });
    } catch (error) {
      next(error);
    }
  }
  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.categoryService.getAllCategories();
      return res
        .status(StatusCode.OK)
        .send({ message: "Get All Categories Sucessfully", data: categories });
    } catch (error) {
      next(error);
    }
  }
  async findCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.categoryService.findCategoryById(
        req.params.categoryId
      );
      return res
        .status(StatusCode.OK)
        .send({ message: "Get Category By Id Sucessfully", data: category });
    } catch (error) {
      next(error);
    }
  }
  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedCategory = await this.categoryService.updateCategory(
        req.params.categoryId,
        req.body
      );
      return res.status(StatusCode.OK).send({
        message: "Update Category Sucessfully",
        data: updatedCategory,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      await this.categoryService.deleteCategory(req.params.categoryId);
      return res
        .status(StatusCode.NoContent)
        .send({ message: "Delete Category Sucessfully" });
    } catch (error) {
      next(error);
    }
  }
}
