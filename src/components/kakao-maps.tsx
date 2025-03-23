/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";

export const KakaoMaps = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    
    (window as any).kakao?.maps?.load(() => {
      const targetPosition = new (window as any).kakao.maps.LatLng(37.4544244, 127.0760178);
      const options =  {
        center: targetPosition,
        level: 3,
        draggable: false,
      };
      const map = new (window as any).kakao.maps.Map(ref.current, options);

      const marker = new (window as any).kakao.maps.Marker({
        position: targetPosition,
      });

      const control = new (window as any).kakao.maps.ZoomControl();
      map.addControl(control, (window as any).kakao.maps.ControlPosition.TOPRIGHT); 

      marker.setMap(map);
    });
  }, []);

  return (
    <div className="pt-12">
      <div className="h-[320px]" ref={ref}></div>
    </div>
  );
};
