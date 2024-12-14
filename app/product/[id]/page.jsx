"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const fetchProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/product/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const Page = ({ params }) => {
  const [product, setProduct] = useState({});
  const { id: productId } = params;

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProduct(productId);
      setProduct(data);
    };

    getProduct();
  }, [productId]);

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Product Details</h1>
      {!product.name ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="p-3 min-w-2xl max-w-3xl rounded-lg shadow-lg mx-auto">
          <div className="flex gap-6 flex-row justify-center items-start">
            <Image
            src='https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600'
            width={600}
            height={450}
            alt={product.name}
            className="w-80 h-80 object-cover rounded-lg mb-6"
          />
            <div>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {product.description}
              </p>
              <p className="text-xl font-semibold text-green-600 mb-4">
                ${product.price}
              </p>

              {product.rating && (
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">
                    {"★".repeat(Math.round(product.rating))}{" "}
                    {/* Display full stars */}
                    {"☆".repeat(5 - Math.round(product.rating))}{" "}
                    {/* Display empty stars */}
                  </span>
                  <span className="ml-2 text-gray-500">
                    ({product.numReviews} reviews)
                  </span>
                </div>
              )}

                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
