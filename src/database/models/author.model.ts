import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({
  authorName: { type: String, required: true },
  bio: { type: String },
  DOB: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const AuthorModel = mongoose.model("Author", AuthorSchema);
