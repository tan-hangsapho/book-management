import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  publishedDate: { type: Date, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const BookModel = mongoose.model("Book", BookSchema);
