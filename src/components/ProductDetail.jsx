import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
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
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const testimonials = data?.reviews || [];
  console.log("..", testimonials);

  const getVisibleTestimonials = () => {
    const visible = testimonials.slice(currentIndex, currentIndex + 3);

    if (visible.length < 3 && testimonials.length >= 3) {
      const remaining = 3 - visible.length;
      visible.push(...testimonials.slice(0, remaining));
    }

    return visible;
  };

  const ChevronLeft = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );

  const ChevronRight = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white mt-16">
      <Header />
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <NavLink to={"/"}>Home</NavLink> / Product
        </div>
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-32">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white"
          >
            <div className="flex gap-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-black text-lg">
                {testimonial.reviewerName}
              </span>
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon />
              </div>
            </div>
            <blockquote className="text-gray-600 leading-relaxed">
              "{testimonial.comment}"
            </blockquote>
          </div>
        ))}
      </div>
      <div className="flex md:hidden justify-center gap-2 mt-8">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center gap-2 mb-10">
        {Array.from(
          { length: Math.ceil(testimonials.length / 3) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 3) === index
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
