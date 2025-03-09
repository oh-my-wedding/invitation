import Image from "next/image";

import { KakaoMaps } from "@/components/kakao-maps";
import { Comments } from "@/components/comments";
import { SectionView } from "@/components/section.view";
import { Calendar } from "@/components/calendar";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] relative flex flex-col justify-center items-center">
      <div className="bg-[#fcfaf8] relative h-full w-full max-w-[430px] shadow-lg text-center">
        <div className="relative bg-[#ffffff] shadow-sm">
          <div className="relative h-[600px] w-full">
            <Image
              src="/invitation/images/front.jpg"
              alt="Main Image"
              fill
              priority
            />
          </div>
          <div className="flex justify-center items-center py-8">
            <p className="text-xl tracking-[5px]">안현규</p>
            <div className="mx-8 border border-1 h-6"></div>
            <p className="text-xl tracking-[5px]">홍희진</p>
          </div>
          <div className="pb-12">
            <p>2025.05.25 SUN 11:00AM</p>
            <p>헤이스가든</p>
          </div>
          <div style={{ position: 'absolute', top: 16, left: 16, width: 'calc(100% - 32px)', height: 'calc(100% - 32px)', border: '2px solid #EFEFEF' }}></div>
        </div>
        
        <SectionView>
          <div className="flex justify-center">
            <Image
              src="/invitation/images/duckboon-char.png"
              alt="Main Image"
              width={46}
              height={46}
            />
          </div>
          <p>결혼합니다.</p>
          <p></p>
          <p>멘트 멘트 멘트</p>
        </SectionView>

        <div className="bg-white shadow-sm py-16">
          <p className="tracking-[0.3em] text-sm">THE WEDDING DAY</p>
          <Calendar />
        </div>

        <SectionView>
          <div>
            <p className="tracking-[0.3em] text-xs">LOCATION</p>
            <p className="tracking-[0.3em] pt-2">오시는 길</p>
          </div>
          <div className="pt-8">
            <p className="tracking-[0.3em]">헤이스가든</p>
            <p className="tracking-[0.1em] pt-2 text-[#4E4C4B] text-sm">서울 서초구 신흥안길 40-15</p>
          </div>
          <KakaoMaps />
          <div className="pt-4 px-2">
            <div className="px-4 flex justify-between">
              <div
                style={{ boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)' }}
                className="mx-1 h-[45px] flex flex-1 justify-center items-center bg-white rounded-xl"
              >
                <Image src="/invitation/icons/navermap-icon.png" alt="Naver Map" width={20} height={20} />
                <span className="ml-1">
                  네이버지도
                </span>
              </div>
              <div
                style={{ boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)' }}
                className="mx-1 h-[45px] flex flex-1 justify-center items-center bg-white rounded-xl"
              >
                <Image src="/invitation/icons/kakaomap-icon.png" alt="Kakao Map" width={20} height={20} />
                <span className="ml-1">
                  카카오맵
                </span>
              </div>
              <div
                style={{ boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)' }}
                className="mx-1 h-[45px] flex flex-1 justify-center items-center bg-white rounded-xl"
              >
                <Image src="/invitation/icons/tmap-icon.png" alt="T Map" width={20} height={20} />
                <span className="ml-1">
                  티앱
                </span>
              </div>
            </div>
          </div>
        </SectionView>

        <SectionView>
          <Comments /> 
        </SectionView>
      </div>
    </div>
  );
}
