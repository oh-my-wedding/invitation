"use client";

import { useCallback, useEffect, useState } from "react";

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

const latitude = 37.4544244;
const longitude = 127.0760178;
let mapInstance: naver.maps.Map | null = null;

export const KakaoMaps = () => {
  const [isMapLoaded, setMapLoaded] = useState(false);
  
  const initMap = useCallback(() => {
    const mapOptions: naver.maps.MapOptions = {
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 16,
      draggable: false,
      scrollWheel: false,
    };

    if (document.getElementById('map')) {
      mapInstance = new naver.maps.Map('map', mapOptions);
    }

    // Marker 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapInstance!,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, 'click', () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(16);
    });
  }, []);

  useEffect(() => {
    if (typeof naver === 'undefined') {
      loadScript(
        'https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=vvqmqdqfg5',
        () => setMapLoaded(true),
      );
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isMapLoaded) {
      return;
    }
    initMap();
  }, [isMapLoaded, initMap]);

  return (
    <div className="pt-12">
      <div id="map" className="h-[320px]"></div>
    </div>
  );
};
