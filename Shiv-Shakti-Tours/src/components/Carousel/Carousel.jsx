import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Carousel.css";

const Carousel = ({
  images = [], // Array of image URLs
  slides = [], // Optional: Array of objects with { image, text }
  autoplayEnabled = false,
  autoplayDelay = 1000,
}) => {
  // Merge images and slides
  const combinedSlides = slides.length > 0
    ? slides
    : images.map((image) => ({ image })); // Wrap image URLs in objects

  return (
    <Swiper
      className="swiper-container"
      modules={[Autoplay]}
      autoplay={autoplayEnabled ? { delay: autoplayDelay } : false}
      loop={true}
      slidesPerView={1}
      centeredSlides={true}
    >
      {combinedSlides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide relative">
          {/* Image */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="carousel-image w-full h-auto object-contain"
            loading="lazy"
          />
          {/* Optional Centered Text */}
          {slide.text && (
            <div
              className="absolute flex justify-center items-center text-center 
                         text-white bg-black bg-opacity-45 p-2 rounded text-xs sm:text-3xl md:text-5xl lg:text-7xl m-3 border border-black"
            >
              <h2 className="text-xl md:text-3xl lg:text-5xl">{slide.text}</h2>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
