import { ICategory } from "../models/@types/category.type";
import { CategoryModel } from "../models/category.model";

export class CategoryRepository {
  async createCategory(category: ICategory) {
    try {
      const newCategory = await CategoryModel.create(category);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }
  async getAllCategories() {
    try {
      return CategoryModel.find({});
    } catch (error) {
      throw error;
    }
  }
  async findCategorybyId(categoryId: string) {
    try {
      return await CategoryModel.findById(categoryId);
    } catch (error) {
      throw error;
    }
  }
  async updateCategory(categoryId: string, updatedCategory: ICategory) {
    try {
      return await CategoryModel.findByIdAndUpdate(
        categoryId,
        updatedCategory,
        { new: true }
      );
    } catch (error) {
      throw error;
    }
  }
  async deleteCategory(categoryId: string) {
    try {
      return await CategoryModel.findByIdAndDelete(categoryId);
    } catch (error) {
      throw error;
    }
  }
}
