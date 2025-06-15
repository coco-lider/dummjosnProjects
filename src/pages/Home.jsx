import React from 'react'
import { Star, Menu, Search, ShoppingCart, User } from "lucide-react"
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"]

  const newArrivals = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "$120",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: "$240",
      originalPrice: "$260",
      rating: 3.5,
      image: "/placeholder.svg?height=200&width=200",
    },
    { id: 3, name: "Checkered Shirt", price: "$180", rating: 4.5, image: "/placeholder.svg?height=200&width=200" },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: "$130",
      originalPrice: "$160",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const topSelling = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      price: "$212",
      originalPrice: "$232",
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Courage Graphic T-shirt",
      price: "$145",
      rating: 4.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Loose Fit Bermuda Shorts",
      price: "$80",
      rating: 3.0,
      image: "/placeholder.svg?height=200&width=200",
    },
    { id: 4, name: "Faded Skinny Jeans", price: "$210", rating: 4.5, image: "/placeholder.svg?height=200&width=200" },
  ]

  const dressStyles = [
    { name: "Casual", image: "/placeholder.svg?height=300&width=400" },
    { name: "Formal", image: "/placeholder.svg?height=300&width=400" },
    { name: "Party", image: "/placeholder.svg?height=300&width=400" },
    { name: "Gym", image: "/placeholder.svg?height=300&width=400" },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
    },
    {
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-white mt-15">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your
                individuality and cater to your sense of style.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>

              <div className="flex flex-wrap gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-gray-600">International Brands</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2,000+</div>
                  <div className="text-gray-600">High-Quality Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">30,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Fashion models"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand, index) => (
              <div key={index} className="text-white text-xl md:text-2xl font-bold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">NEW ARRIVALS</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.originalPrice && <span className="text-gray-500 line-through">{product.originalPrice}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">TOP SELLING</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSelling.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.originalPrice && <span className="text-gray-500 line-through">{product.originalPrice}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">BROWSE BY DRESS STYLE</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dressStyles.map((style, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden group cursor-pointer ${
                  index === 0
                    ? "lg:col-span-1"
                    : index === 1
                      ? "lg:col-span-2"
                      : index === 2
                        ? "lg:col-span-2"
                        : "lg:col-span-1"
                }`}
              >
                <img
                  src={style.image || "/placeholder.svg"}
                  alt={style.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h4 className="text-white text-2xl font-bold">{style.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">OUR HAPPY CUSTOMERS</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>
                <div className="flex items-center mb-4">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="ml-2 text-green-500">✓</span>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Home
