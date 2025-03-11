'use client';

import Image from "next/image";

export const KakaoMapButton = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div
      style={{ boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)' }}
      className="mx-1 h-[45px] flex flex-1 justify-center items-center bg-white rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      <Image src="/invitation/icons/kakaomap-icon.png" alt="Kakao Map" width={20} height={20} />
      <span className="ml-1 text-sm">
        카카오맵
      </span>
    </div>
  )
};
