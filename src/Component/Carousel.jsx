import React, { useState } from 'react';
// import ImageOne from 'images/cr.jpg';
// import ImageTwo from 'images/cr.jpg';
// import ImageThree from 'images/cr.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      alt: 'First slide'
    },
    {
      src: "https://cdn.britannica.com/34/180334-138-4235A017/subordinate-meerkat-pack.jpg?w=800&h=450&c=crop",
      alt: 'Second slide'
    },
    {
      src: "ihttps://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      alt: 'Third slide'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <>
    <div className="">
      {images.map((image, index) => 
      
        {return(
          <>
          <div
          key={index}
          className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
          </>
          
        )}
      )}
      <button
        className="prev control-1 w-10 h-10 ml-2 md:ml-6 absolute cursor-pointer hidden text-2xl font-bold text-white leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="next control-1 w-10 h-10 mr-2 md:mr-6 absolute cursor-pointer hidden text-2xl font-bold text-white leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        onClick={nextSlide}
      >
        ›
      </button>
      <ol className="carousel-indicators absolute bottom-0 left-0 right-0 mb-4 flex justify-center">
        {images.map((_, index) => (
          <li
            key={index}
            className={`carousel-bullet block w-3 h-3 mx-2 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </ol>
    </div>
    </>
  );
};

export default Carousel;
