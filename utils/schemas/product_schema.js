import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand name is required"],
    },
    stock: {
      type: Number,
      required: [true, "Product stock is required"],
      min: [0, "Stock cannot be less than 0"],
    },
    images: {
      type: [String], // Array of image URLs
      required: [true, "At least one product image is required"],
    },
    rating: {
      type: Number,
      default: 0, // Default rating
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0, // Number of reviews
    },
    isFeatured: {
      type: Boolean,
      default: false, // Whether the product is featured
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set creation date
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
