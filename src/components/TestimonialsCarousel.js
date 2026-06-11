'use client'

import { useState } from 'react'

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Homeowner',
      rating: 5,
      text: 'Nivasyaa transformed my living space completely. The attention to detail and understanding of my vision was exceptional. Highly recommend!',
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Business Owner',
      rating: 5,
      text: 'They redesigned our office and the productivity increased instantly. The modern design paired with functionality is perfect.',
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emma Williams',
      title: 'Architect',
      rating: 5,
      text: 'Working with Nivasyaa was a pleasure. Their professionalism and creative solutions made the project smooth and successful.',
      avatar: '👩‍🔬',
    },
    {
      id: 4,
      name: 'David Martinez',
      title: 'Restaurant Owner',
      rating: 5,
      text: 'They completely revamped our restaurant. Customers love the new ambiance, and foot traffic has increased significantly!',
      avatar: '👨‍🍳',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Client Testimonials
      </h2>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-lg relative">
        {/* Testimonial */}
        <div className="text-center">
          <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>

          <div className="flex justify-center gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>

          <p className="text-lg text-gray-700 mb-6 italic">
            "{currentTestimonial.text}"
          </p>

          <h3 className="text-xl font-bold text-gray-800">
            {currentTestimonial.name}
          </h3>
          <p className="text-gray-600">{currentTestimonial.title}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
          >
            ❮
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
          >
            ❯
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-gray-600 mt-6">
          {currentIndex + 1} of {testimonials.length}
        </p>
      </div>
    </div>
  )
}
