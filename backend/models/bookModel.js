import mongoose from "mongoose";

// Define the Mongoose schema for the Book model
const bookSchema = mongoose.Schema(
  {
    // Title of the book (String), required field
    title: {
      type: String,
      required: true,
    },
    // Author of the book (String), required field
    author: {
      type: String,
      required: true,
    },
    // Year the book was published (Number), required field
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    // Add timestamps for createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create the Mongoose model named "Book" based on the bookSchema
export const Book = mongoose.model("Book", bookSchema);
