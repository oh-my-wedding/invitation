/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";

export const KakaoMaps = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    
    (window as any).kakao.maps?.load(() => {
      const options =  {
        center: new (window as any).kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new  (window as any).kakao.maps.Map(ref.current, options);
    });
  }, []);

  return (
    <div>
      <div className="h-[230px]" ref={ref}></div>
    </div>
  );
};
