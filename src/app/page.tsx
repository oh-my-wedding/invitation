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
import { CarSvg } from "@/svg/car-svg";
import { BusSvg } from "@/svg/bus-svg";
import { SubwaySvg } from "@/svg/subway.svg";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] relative flex flex-col justify-center items-center">
      <div className="bg-[#fcfaf8] relative h-full w-full max-w-[430px] shadow-lg text-center">
        <div className="relative bg-[#ffffff] shadow-sm font-suit">
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
                height: '5%',
                background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%)',
              }}
            />
          </div>
          <div className="flex justify-center items-center py-8">
            <p className="text-xl tracking-[5px]">안현규</p>
            <div className="mx-8 border border-1 h-6"></div>
            <p className="text-xl tracking-[5px]">홍희진</p>
          </div>
          <div className="pb-12">
            <p>2025.05.25 SUN 12:00AM</p>
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
          <div className="tracking-[0.2em] leading-[2em] font-suit font-extralight">
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
          <div className="mt-16 leading-[2em]">
            <div>
              <span>안홍기</span>
              <span> · </span>
              <span>이귀분</span>
              <span className="text-sm font-extralight mx-1">의 아들</span>
              <span>현규</span>
            </div>
            <div>
              <span>홍인덕</span>
              <span> · </span>
              <span>이현자</span>
              <span className="text-sm font-extralight mx-1">의 딸</span>
              <span>희진</span>
            </div>
          </div>
        </SectionView>

        <SectionView title="CASTING" subTitle="등장인물">
          <div className="w-full h-full">
            <img
              className="w-full h-auto"
              src="/invitation/images/family.jpg"
              alt="Main Image"
            />
          </div>
        </SectionView>

        <div className="bg-white shadow-sm py-16">
          <p className="tracking-[0.3em] text-sm font-sometimesTimes">THE WEDDING DAY</p>
          <Calendar />
        </div>

        <SectionView title="LOCATION" subTitle="오시는 길">
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

          <div className="p-8 font-suit text-left flex flex-col gap-y-4">
            <div>
              <div className="flex items-center py-2">
                <span className="mr-2">
                  <CarSvg />
                </span>
                <span className="text-[#AFC18B]">자차</span>
              </div>
              <div className="py-4">
                <span className="font-extralight text-sm">
                  <p>네비게이션 : &apos;헤이스가든&apos; 검색</p>
                  <p>서울 서초구 신흥안길 40-15</p>
                </span>
              </div>
              <div className="w-full my-2 h-[1px] border"></div>
            </div>
            <div>
              <div className="flex items-center py-2">
                <span className="mr-2">
                  <BusSvg />
                </span>
                <span className="text-[#AFC18B]">버스</span>
              </div>
              <div className="py-4">
                <span className="font-extralight text-sm">
                  <p>[양재역]</p>
                  <p>지하철(신분당선) 하차 후 9번 출구 버스 환승</p>
                  <p>[양재시민의숲역]</p>
                  <p>지하철(신분당선) 하차 후 4번 출구 버스 환승</p>
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-2">
                <span className="mr-2">
                  <SubwaySvg />
                </span>
                <span className="text-[#AFC18B]">지하철</span>
              </div>
              <div className="py-4">
                <span className="font-extralight text-sm">
                  <p>3호선(양재역)</p>
                  <p>지하철(신분당선) 하차 후 9번 출구 버스 환승</p>
                  <p>신분당선(양재시민의숲역)</p>
                  <p>지하철(신분당선) 하차 후 4번 출구 버스 환승</p>
                </span>
              </div>
            </div>
          </div>
        </SectionView>
          
        <SectionView title="GALLERY" subTitle="갤러리">
          <Gallery />
        </SectionView>

        <SectionView subTitle="마음 전하실 곳">
          <div className="mt-8">
            <Accordion title="신랑측" />
            <Accordion title="신부측" />
          </div>
        </SectionView>

        <SectionView>
          <Comments /> 
        </SectionView>
      </div>
    </div>
  );
}
