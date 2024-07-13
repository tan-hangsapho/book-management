import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  categoryName: { type: String, required: true },
  description: { type: String },
  createAt: { type: Date, default: Date.now },
});

export const CategoryModel = mongoose.model("Category", CategorySchema);
