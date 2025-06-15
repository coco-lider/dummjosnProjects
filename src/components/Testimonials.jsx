"use client"

import { useState } from "react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      id: 4,
      name: "Maria S.",
      rating: 5,
      text: "The customer service at Shopco is exceptional. They helped me find the perfect outfit for my wedding, and I couldn't be happier with my purchase.",
    },
    {
      id: 5,
      name: "David R.",
      rating: 5,
      text: "Quality, style, and affordability - Shopco delivers on all fronts. I've been a loyal customer for over two years now.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1))
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  const getVisibleTestimonials = () => {
    const visible = testimonials.slice(currentIndex, currentIndex + 3)

    if (visible.length < 3 && testimonials.length >= 3) {
      const remaining = 3 - visible.length
      visible.push(...testimonials.slice(0, remaining))
    }

    return visible
  }

  const ChevronLeft = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )

  const ChevronRight = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )

  const CheckIcon = () => (
    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )

  return (
    <section className="py-12 px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">OUR HAPPY CUSTOMERS</h2>
          <div className="hidden md:flex gap-2">
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
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white"
            >
              <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold text-black text-lg">{testimonial.name}</span>
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckIcon />
                </div>
              </div>
              <blockquote className="text-gray-600 leading-relaxed">"{testimonial.text}"</blockquote>
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
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 3) === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
