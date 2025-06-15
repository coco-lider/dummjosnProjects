import React from 'react'
import { Star, Heart, Menu, Search, User, ShoppingBag } from "lucide-react"
import Footer from './Footer'
import Header from './Header'

const ProductDetail = () => {
return (
    <div className="min-h-screen bg-white mt-17">
      {/* Header */}
      <Header/>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">Home / Shop / Men / T-shirts</div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="OWL LIFE GRAPHIC T-SHIRT"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">OWL LIFE GRAPHIC T-SHIRT</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.5/5</span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold">$260</span>
                <span className="text-xl text-gray-500 line-through">$300</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">-40%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-3">Select Colors</h3>
                <div className="flex space-x-3">
                  {["bg-green-800", "bg-gray-800", "bg-blue-600"].map((color, i) => (
                    <button
                      key={i}
                      className={`w-10 h-10 rounded-full ${color} ${i === 0 ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Choose Size</h3>
                <div className="flex space-x-3">
                  {["Small", "Medium", "Large", "X-Large"].map((size, i) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                        i === 1 ? "bg-black text-white" : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-4 py-2 text-lg font-medium hover:bg-gray-50">-</button>
                <span className="px-4 py-2 border-x border-gray-300">1</span>
                <button className="px-4 py-2 text-lg font-medium hover:bg-gray-50">+</button>
              </div>
              <button className="flex-1 bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium">
                Add to Cart
              </button>
              <button className="border border-gray-300 hover:border-gray-400 p-3 rounded-lg">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="border-t border-gray-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">All Reviews (451)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Samantha D.",
                rating: 5,
                review:
                  "I absolutely love this t-shirt! The design is unique and the fabric quality is amazing. As a happy customer, I highly recommend this to anyone looking for something special.",
              },
              {
                name: "Alex M.",
                rating: 4,
                review:
                  "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a satisfied customer, I would definitely order from here again.",
              },
              {
                name: "Ethan R.",
                rating: 4,
                review:
                  "This t-shirt is a must-have for anyone who appreciates good design. The quality is exceptional and it fits perfectly. I'm very happy with my purchase.",
              },
              {
                name: "Olivia P.",
                rating: 5,
                review:
                  "As a loyal customer, I can say this t-shirt is one of the best purchases I've made. The attention to detail and quality of the fabric is outstanding.",
              },
              {
                name: "Liam K.",
                rating: 4,
                review:
                  "This t-shirt is a true gem! The design is eye-catching and the fabric feels premium. As a happy customer, I would definitely recommend this to others.",
              },
              {
                name: "Ava H.",
                rating: 5,
                review:
                  "I'm thrilled with this t-shirt! The colors are exactly as shown and the quality is superb. As a satisfied customer, I couldn't be happier with my purchase.",
              },
            ].map((review, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
                <div className="text-xs text-gray-400 mt-3">Posted on August 14, 2023</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-medium">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Polo with Contrast Trims", price: "$212", originalPrice: "$242", discount: "-20%" },
            { name: "Gradient Graphic T-shirt", price: "$145" },
            { name: "Polo with Tipping Details", price: "$180" },
            { name: "Black Striped T-shirt", price: "$120", originalPrice: "$150", discount: "-30%" },
          ].map((product, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2 text-sm">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-3 w-3 text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-600">4.0/5</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">{product.discount}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    <Footer/>
    </div>
  )
}

export default ProductDetail
