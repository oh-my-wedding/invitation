'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';

const IMAGES = [
  '/invitation/images/gallery-1.jpg',
  '/invitation/images/gallery-2.jpg',
  '/invitation/images/gallery-3.jpg',
  '/invitation/images/gallery-4.jpg',
  '/invitation/images/gallery-5.jpg',
  '/invitation/images/gallery-6.jpg',
];

export const Gallery = () => {
  return (
    <div className="relative my-8">
      <Swiper
        slidesPerView={1}
        rewind={true}
      >
        {IMAGES.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl}
              alt="Gallery Image"
              className="w-full"
            />
          </SwiperSlide>
        ))}
      <SlideActions />
      </Swiper>
    </div>
  );
};

const SlideActions = () => {
  const swiper = useSwiper();
  return (
    <>
      <div
        className="absolute w-[30px] h-[30px] flex items-center justify-center rounded-full"
        style={{ top: 'calc(50% - 15px)', left: 8, background: 'rgba(0, 0, 0, 0.4)', zIndex: 10 }}
        onClick={() => swiper.slidePrev()}
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#fff" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
        </svg>
      </div>
      <div
        className="absolute w-[30px] h-[30px] flex items-center justify-center rounded-full"
        style={{ top: 'calc(50% - 15px)', right: 8, background: 'rgba(0, 0, 0, 0.4)', zIndex: 10 }}
        onClick={() => swiper.slideNext()}
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#fff" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
        </svg>
      </div>
    </>
  );
};