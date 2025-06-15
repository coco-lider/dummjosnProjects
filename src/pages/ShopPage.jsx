import { Search, User, ShoppingBag, Menu, X, ChevronDown, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ShopPage = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([50, 200])

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      image: "/placeholder.svg?height=300&width=300",
      rating: 3.5,
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      discount: 30,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5.0,
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      discount: 20,
      image: "/placeholder.svg?height=300&width=300",
      rating: 3.5,
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      discount: 30,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      originalPrice: 232,
      discount: 20,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5.0,
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.0,
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      image: "/placeholder.svg?height=300&width=300",
      rating: 3.0,
    },
  ]

  const colors = [
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-white",
    "bg-black",
  ]

  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]

  const categories = [
    { name: "T-shirts", count: 0 },
    { name: "Shorts", count: 0 },
    { name: "Shirts", count: 0 },
    { name: "Hoodie", count: 0 },
    { name: "Jeans", count: 0 },
  ]

  const dressStyles = [
    { name: "Casual", count: 0 },
    { name: "Formal", count: 0 },
    { name: "Party", count: 0 },
    { name: "Gym", count: 0 },
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>,
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ☆
        </span>,
      )
    }

    return stars
  }

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? "fixed inset-0 bg-white z-50 overflow-y-auto" : "sticky top-4"} space-y-6`}>
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={() => setIsMobileFiltersOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
      )}

      <div className={isMobile ? "p-4 space-y-6" : "space-y-6"}>
        {/* Categories */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Categories</h3>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-600">{category.name}</span>
                </label>
                <span className="text-sm text-gray-400">{category.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Price</h3>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="range"
                min="0"
                max="300"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white mt-20">
        <Header/>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">Home / Casual</div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Casual</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Showing 1-10 of 100 Products</span>
                <button
                  className="lg:hidden flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg"
                  onClick={() => setIsMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                            -{product.discount}%
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {isMobileFiltersOpen && <FilterSidebar isMobile={true} />}

     <Footer/>
    </div>
  )
}

export default ShopPage
