import Image from "next/image";

import { KakaoMaps } from "@/components/kakao-maps";
import { Comments } from "@/components/comments";
import { SectionView } from "@/components/section.view";
import { Calendar } from "@/components/calendar";
import { NaverMapButton } from "@/components/naver-map-button";
import { KakaoMapButton } from "@/components/kakao-map-button";
import { TMapButton } from "@/components/tmap-button";
import { Gallery } from "@/components/gallery";
import { Accordion } from "@/components/accordion";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] relative flex flex-col justify-center items-center">
      <div className="bg-[#fcfaf8] relative h-full w-full max-w-[430px] shadow-lg text-center">
        <div className="relative bg-[#ffffff] shadow-sm">
          <div className="relative h-[600px] w-full text-white">
            <h1 className="text-4xl font-sometimesTimes whitespace-normal w-full break-all absolute top-32 z-10">
              <p>HYEONGYU & HEEJIN</p>
            </h1>
            <Image
              src="/invitation/images/banner.jpg"
              alt="Main Image"
              style={{
                objectFit: 'cover',
              }}
              fill
              priority
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '15%',
                background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%)',
              }}
            />
          </div>
          <div className="flex justify-center items-center py-8 font-suit">
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
              width={64}
              height={64}
            />
          </div>
          <div className="tracking-[0.2em] leading-[2em] font-suit font-thin">
            <p>함께 다니는 캠핑이 즐거워</p>
            <p>결혼하고 싶어진 현규,</p>
            <br/>
            <p>이상형인 착하고 재밌는 사람을 만나</p>
            <p>결혼을 결심한 희진</p>
            <br/>
            <p>저희 둘이 한 가족이 되어</p>
            <p>기쁜 일도, 슬픈 일도 함께하려고 합니다.</p>
            <br/>
            <p>부디 귀한 걸음 하시어</p>
            <p>새로운 시작을 함께해 주세요!</p>
          </div>
          <div className="mt-12 leading-[2em]">
            <div>
              <span>안홍기</span>
              <span> · </span>
              <span>이귀분</span>
              <span>의 아들</span>
              <span>현규</span>
            </div>
            <div>
              <span>홍인덕</span>
              <span> · </span>
              <span>이현자</span>
              <span>의 딸</span>
              <span>희진</span>
            </div>
          </div>
        </SectionView>

        <div className="bg-white shadow-sm py-16">
          <p className="tracking-[0.3em] text-sm font-sometimesTimes">THE WEDDING DAY</p>
          <Calendar />
        </div>

        <SectionView>
          <div>
            <p className="tracking-[0.3em] text-xs font-sometimesTimes">LOCATION</p>
            <p className="tracking-[0.3em] pt-2">오시는 길</p>
          </div>
          <div className="pt-8">
            <p className="tracking-[0.3em]">헤이스가든</p>
            <p className="tracking-[0.1em] pt-2 text-[#4E4C4B] text-sm">서울 서초구 신흥안길 40-15</p>
          </div>

          <KakaoMaps />

          <div className="pt-4 px-2">
            <div className="px-4 flex justify-between">
              <NaverMapButton />
              <KakaoMapButton />
              <TMapButton />
            </div>
          </div>

          <div>
            <p>주차 안내</p>
            <div>
              안녕
            </div>
          </div>
        </SectionView>
          
        <SectionView>
          <div>
            <p className="tracking-[0.3em] text-xs font-sometimesTimes">GALLERY</p>
            <p className="tracking-[0.3em] pt-2">갤러리</p>
            <Gallery />
          </div>
        </SectionView>

        <SectionView>
          <div>
            <p className="tracking-[0.3em] pt-2">마음 전하실 곳</p>
            <div className="mt-8">
              <Accordion title="신랑측" />
              <Accordion title="신부측" />
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
