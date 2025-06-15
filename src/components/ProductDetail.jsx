import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../services/api";
import { Star, Heart } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: getSingleProduct,
    enabled: !!id,
  });

  const handleAdd = async () => {
    try {
      const res = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          products: [{ id: data.id, quantity: 1 }],
        }),
      });
      await res.json();
      addToCart({
        id: data.id,
        name: data.title,
        price: data.price,
        image: activeImage,
        quantity: 1,
        size: "Default",
        color: "Default",
      });
      alert("✅ Mahsulot savatchaga qo‘shildi!");
    } catch (err) {
      console.error(err);
      alert("❌ Xato — mahsulot qo‘shilmadi.");
    }
  };

  useEffect(() => {
    if (data?.images?.length) {
      setActiveImage(data.images[0]);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="mt-20 w-full flex justify-center items-center text-center py-10">
        Yuklanmoqda...
      </div>
    );
  if (isError)
    return (
      <div className="text-center py-10 text-red-500">Xatolik yuz berdi!</div>
    );

  return (
    <div className="min-h-screen bg-white mt-16">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {data.images.length > 1 && (
              <div className="flex lg:flex-col gap-3 max-h-[500px] overflow-y-auto">
                {data.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumbnail-${i}`}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                      activeImage === img ? "border-black" : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="flex-1">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={activeImage}
                  alt="Asosiy rasm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-gray-600">{data.description}</p>

            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <span className="text-3xl font-bold">${data.price}</span>
              <span className="text-xl text-gray-500 line-through">
                ${(data.price * 1.2).toFixed(2)}
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                -20%
              </span>
            </div>

            <div className="flex space-x-4 mt-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-lg"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium"
              >
                Add to Cart
              </button>
              <button className="border border-gray-300 hover:border-gray-400 p-3 rounded-lg">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
