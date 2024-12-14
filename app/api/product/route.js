import { NextResponse } from "next/server";
import { connectToDb } from "@/utils/db";
import Product from "@/utils/schemas/product_schema";

export const GET = async (request) => {
  try {
    await connectToDb(); // Connect to the database
    const products = await Product.find(); // Fetch all products
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
};

// Handle POST requests (e.g., Add a new product)
export const POST = async (request) => {
  try {
    await connectToDb(); // Connect to the database
    const data = await request.json(); // Parse request body
    const newProduct = await Product.create(data); // Create a new product
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
};
