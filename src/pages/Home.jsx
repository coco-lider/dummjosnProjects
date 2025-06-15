import React, { useEffect, useState } from "react";
import { Star, Menu, Search, ShoppingCart, User } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import hero from '../assets/Rectangle.png'

const Home = () => {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [id,setId] = useState('')
  const navigate = useNavigate();
  console.log(id);
  

  const dressStyles = [
    { name: "Casual", image: "/placeholder.svg?height=300&width=400" },
    { name: "Formal", image: "/placeholder.svg?height=300&width=400" },
    { name: "Party", image: "/placeholder.svg?height=300&width=400" },
    { name: "Gym", image: "/placeholder.svg?height=300&width=400" },
  ];

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["products", { limit, skip }],
    queryFn: getProducts,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.products) {
      setProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  console.log(data?.products);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white mt-15">
      <Header />
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>

            <div className="relative">
              <img
                src={hero}
                alt="Fashion models"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-white text-xl md:text-2xl font-bold"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {product.images && product.images.length > 0 ? (
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      spaceBetween={10}
                      className="w-full h-64"
                    >
                      {product.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            onClick={()=>navigate(`/product/${product.id}`)} 
                            src={img}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                      Rasm yo‘q
                    </div>
                  )}
                </div>

                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex items-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating}/5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              View All
            </button>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
