import { connectToDb } from "@/utils/db";
import product_schema from "@/utils/schemas/product_schema";
import { NextResponse } from "next/server";


export const GET = async (req, {params}) => {
  try {
    await connectToDb(); // Connect to the database
    const productId = params.id;
    const product = await product_schema.findById(productId); // Fetch product by ID
    return NextResponse.json(product, { status: 200 });
  }
  catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
} 