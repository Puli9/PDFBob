'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Full Name 1', review: 'Great tool for managing PDFs!', photo: '/images/image.jpg' },
  { id: 2, name: 'Full Name 2', review: 'Great tool for managing PDFs!', photo: '/images/image.jpg' },
  { id: 3, name: 'Full Name 3', review: 'Great tool for managing PDFs!', photo: '/images/image.jpg' },
  { id: 4, name: 'Full Name 4', review: 'Great tool for managing PDFs!', photo: '/images/image.jpg' },
  { id: 5, name: 'Full Name 5', review: 'Great tool for managing PDFs!', photo: '/images/image.jpg' },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - testimonialsPerPage < 0 ? Math.max(testimonials.length - testimonialsPerPage, 0) : prevIndex - testimonialsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  return (
    <section className="py-20 bg-white">
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {currentIndex > 0 && (
            <button 
              onClick={prevTestimonial} 
              className="absolute left-0 z-10 p-2 text-customPink1 hover:text-pink-600"
            >
              <ChevronLeft size={32} />
            </button>
          )}
          
          <div className="flex w-full">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 px-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="mx-auto rounded-full mb-4"
                    width={80}
                    height={80}
                  />
                  <p className="text-gray-600 mb-2">&quot;{testimonial.review}&quot;</p>
                  <p className="font-bold text-customPink1">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {currentIndex + testimonialsPerPage < testimonials.length && (
            <button 
              onClick={nextTestimonial} 
              className="absolute right-0 z-10 p-2 text-customPink1 hover:text-pink-600"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(testimonials.length / testimonialsPerPage))].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === Math.floor(currentIndex / testimonialsPerPage) ? 'bg-customPink1' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
