"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/product");
    const data = await response.json();
    return data; // Return resolved data
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};

export default function Products() {
  const [products, setProducts] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    // Fetch products and update state
    const getProducts = async () => {
      const data = await fetchProducts(); // Wait for resolved data
      setProducts(data); // Update state with resolved data
    };

    getProducts();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-5xl">Products</h1>
      <div className="flex items-center flex-wrap justify-center gap-3 ">
        {products.length > 0 ? (
          products.map((product) => (
            <Link href={`/product/${product._id}`} className="flex flex-col justify-center items-start p-2 border border-slate-200 max-w-md" key={product._id}>
                {/* <Image src={product.image} alt={product.name} width={300} height={300} /> */}
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-sm text-slate-250">{product.description}</p>
              <p className="text-lg font-semibold">${product.price}</p>
            </Link>
          ))
        ) : (
          <p>Loading... Please wait...</p>
        )}
      </div>
    </section>
  );
}
