'use client';

import Image from "next/image";

const SCHEME = `tmap://search?name=${encodeURIComponent('헤이스가든')}`;

export const TMapButton = () => {
  const handleClick = () => {
    window.location.href = SCHEME;
  };

  return (
    <div
      style={{ boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)' }}
      className="mx-1 h-[45px] flex flex-1 justify-center items-center bg-white rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      <Image src="/invitation/icons/tmap-icon.png" alt="T Map" width={20} height={20} />
      <span className="ml-1 text-sm min-w-8">
        티맵
      </span>
    </div>
  )
};
