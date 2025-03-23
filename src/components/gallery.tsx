'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CDN_URL } from '@/constants/url';

import 'swiper/css';

import './gallery.css';

const IMAGES = new Array(13).fill('');

export const Gallery = () => {
  return (
    <div className="relative my-12">
      <Swiper
        slidesPerView="auto"
        spaceBetween={4}
        speed={800}
        loop
        centeredSlides
      >
        {IMAGES.map((_, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={`${CDN_URL}/gallery/photo_${index + 1}.jpg`}
                alt="Gallery Image"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
        <SlideActions />
      </Swiper>
    </div>
  );
};

const SlideActions = () => {
  const swiper = useSwiper();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const handleSlideChange = (swiper: SwiperClass) => {
      setActivePage(swiper.realIndex + 1);
    };
    swiper.on('slideChange', handleSlideChange);
    return () => {
      swiper.off('slideChange', handleSlideChange);
    }
  }, [swiper]);

  return (
    <div className="mt-6 flex items-center justify-between">
      <button className="px-4" onClick={() => swiper.slidePrev()}>
        <ChevronLeft size={30} className="text-gray-400" />
      </button>
      <div className="text-sm text-black font-suit">{activePage} / {IMAGES.length}</div>
      <button className="px-4" onClick={() => swiper.slideNext()}>
        <ChevronRight size={30} className="text-gray-400" />
      </button>
    </div>
  );
};
