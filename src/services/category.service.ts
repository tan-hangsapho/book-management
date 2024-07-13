import { ICategory } from "../database/models/@types/category.type";
import { CategoryRepository } from "../database/repositories/category.repo";
import APIError from "../errors/api-error";
import { StatusCode } from "../utils/consts/status-code";

export class CategoryService {
  private categoryRepo: CategoryRepository;
  constructor() {
    this.categoryRepo = new CategoryRepository();
  }
  async createCategory(category: ICategory) {
    try {
      const newCategory = await this.categoryRepo.createCategory(category);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }
  async getAllCategories() {
    try {
      const categories = await this.categoryRepo.getAllCategories();
      return categories;
    } catch (error) {
      throw error;
    }
  }
  async findCategoryById(categoryId: string) {
    try {
      const category = await this.categoryRepo.findCategorybyId(categoryId);
      return category;
    } catch (error) {
      throw error;
    }
  }
  async updateCategory(categoryId: string, updatedCategory: ICategory) {
    try {
      const findCategory = await this.categoryRepo.findCategorybyId(categoryId);
      if (!findCategory) {
        throw new APIError("Categories not found", StatusCode.NotFound);
      }
      const updatedCategoryData = await this.categoryRepo.updateCategory(
        categoryId,
        updatedCategory
      );
      if (!updatedCategoryData) {
        throw new APIError(
          "Failed to update category",
          StatusCode.InternalServerError
        );
      }
      return updatedCategoryData;
    } catch (error) {
      throw error;
    }
  }
  async deleteCategory(categoryId: string) {
    try {
      const findCategory = await this.categoryRepo.findCategorybyId(categoryId);
      if (!findCategory) {
        throw new APIError("Categories not found", StatusCode.NotFound);
      }
      const deletedCategory = await this.categoryRepo.deleteCategory(
        categoryId
      );
      if (!deletedCategory) {
        throw new APIError(
          "Failed to delete category",
          StatusCode.InternalServerError
        );
      }
      return deletedCategory;
    } catch (error) {
      throw error;
    }
  }
}
