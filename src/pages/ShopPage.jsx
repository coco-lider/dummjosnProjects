import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { api, getProductsCategory } from "../services/api";
import { NavLink, useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";

const getProducts = async () => {
  const res = await api.get("/products?limit=100");
  return res.data.products;
};

function valuetext(value) {
  return `${value}°C`;
}

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = React.useState([0, 300]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    data: allProducts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getProductsCategory,
  });

  console.log(categories);

  // const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  // Frontend filtering
  const filteredProducts = allProducts.filter((p) => {
    const inCategory = selectedCategory
      ? p.category?.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;
    const inPrice = p.price >= value[0] && p.price <= value[1];
    return inCategory && inPrice;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++)
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    if (hasHalf)
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>
      );
    for (let i = 0; i < 5 - Math.ceil(rating); i++)
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ☆
        </span>
      );
    return stars;
  };

  const FilterSidebar = ({ isMobile = false }) => (
    <div
      className={`${
        isMobile
          ? "fixed inset-0 bg-white z-50 overflow-y-auto"
          : "sticky top-4"
      } space-y-6`}
    >
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={() => setIsMobileFiltersOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
      )}

      <div className={isMobile ? "p-4 space-y-6" : "space-y-6"}>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Categories</h3>
          </div>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat.name}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat.slug}
                  onChange={() => setSelectedCategory(cat.slug)}
                />
                <span className="text-sm text-gray-600 capitalize">
                  {cat.name}
                </span>
              </label>
            ))}

            <button
              onClick={() => setSelectedCategory("")}
              className="text-xs text-blue-600 underline mt-2"
            >
              Clear Category
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Price</h3>
          </div>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />

          <div className="flex justify-between text-sm mt-2">
            <span>${value[0]}</span>
            <span>${value[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white mt-20">
      <Header />

      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500"><NavLink to={'/'}>Home</NavLink> / Shop</div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex gap-8">
          <div className="hidden lg:block w-80">
            <FilterSidebar />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Shop</h1>
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
            {isLoading && <p>Loading products...</p>}
            {isError && <p>Error loading products</p>}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.thumbnail || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm md:text-base">
                      {product.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">${product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isMobileFiltersOpen && <FilterSidebar isMobile={true} />}
      <Footer />
    </div>
  );
};

export default ShopPage;
