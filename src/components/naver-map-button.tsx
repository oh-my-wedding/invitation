'use client';

import Image from "next/image";

const SCHEME = `nmap://search?query=${encodeURIComponent('헤이스가든')}&appname=io.github.oh-my-wedding`;

export const NaverMapButton = () => {
  const handleClick = () => {
    window.location.href = SCHEME;
  };

  return (
    <div
      style={{ boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)' }}
      className="mx-1 h-[45px] flex flex-1 justify-center items-center bg-white rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      <Image src="/invitation/icons/navermap-icon.png" alt="Naver Map" width={20} height={20} />
      <span className="ml-1 text-sm">
        네이버지도
      </span>
    </div>
  )
};
