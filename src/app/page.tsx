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
          <div className="relative w-full text-white">
            <h1 className="text-4xl font-sometimesTimes whitespace-normal w-full break-all absolute top-32 z-10">
              <p>HYEONGYU & HEEJIN</p>
            </h1>
            <img
              src="https://d2vg9xq4wqsh4f.cloudfront.net/banner.jpg"
              alt="Main Image"
              className="w-full h-auto"
              style={{
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 40,
                background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%)',
              }}
            />
          </div>
          <div className="flex justify-center items-center py-8">
            <p className="text-xl tracking-[5px]">안현규</p>
            <div className="mx-8 border border-1 h-6"></div>
            <p className="text-xl tracking-[5px]">홍희진</p>
          </div>
          <div className="pb-12 font-light">
            <p>2025년 5월 25일 일요일 오후 12시</p>
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
          <div className="tracking-[0.2em] leading-[2em] font-suit font-extralight tracking-normal">
            <p className="font-sometimesTimes tracking-widest">&quot;You make me want to be a better man.&quot;</p>
            <p>&quot;넌 날 더 나은 사람이 되고 싶게 만들어.&quot;</p>
            <p className="text-sm">≪이보다 더 좋을 순 없다≫ 中</p>
            <br/>
            <p>서로 다른 우리가 만나,</p>
            <p>조금 더 따뜻한 세상을 함께 채워가고자 합니다.</p>
            <br/>
            <p>저희의 시작을 축복해 주신다면,</p>
            <p>더없이 큰 기쁨이 될 것입니다.</p>
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

        <SectionView title="CASTING" subTitle="등장인물" className="pb-0">
          <div className="w-full h-full">
            <img
              className="w-full h-auto"
              src="https://d2vg9xq4wqsh4f.cloudfront.net/casting.jpg"
              alt="Main Image"
            />
          </div>
        </SectionView>

        <SectionView className="bg-white shadow-sm">
          <p className="tracking-[0.3em] text-sm font-sometimesTimes">THE WEDDING DAY</p>
          <Calendar />
        </SectionView>

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
                <span className="text-[#AFC18B]">자차 이용 시</span>
              </div>
              <div className="py-4">
                <span className="font-extralight text-sm">
                  <p>○ 네비게이션 : &apos;헤이스가든&apos; 검색</p>
                  <p>○ 주차: (주차장 이용 안내)</p>
                </span>
              </div>
            </div>
            <div className="w-full my-2 h-[1px] border"></div>
            <div>
              <div className="flex items-center py-2">
                <span className="mr-2">
                  <SubwaySvg />
                </span>
                <span className="text-[#AFC18B]">대중교통 이용 시</span>
              </div>
              <div className="py-4">
                <span className="font-extralight text-sm flex flex-col gap-4">
                  <div>
                    <p>○ 3호선(양재역)</p>
                    <p>지하철(3호선) 하차 후 9번 출구 버스 환승</p>
                  </div>
                  <div>
                    <p>○ 신분당선(양재시민의숲역)</p>
                    <p>지하철(신분당선) 하차 후 4번 출구 버스 환승</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="w-full my-2 h-[1px] border"></div>
            <div>
              <div className="flex items-center py-2">
                <span className="mr-2">
                  <BusSvg />
                </span>
                <span className="text-[#AFC18B]">셔틀버스 이용 시</span>
              </div>
              <div className="py-4">
                <span className="font-extralight text-sm">
                  <p>○ 운행 시간: 10:30 - 14:30, 10분 간격으로 운영</p>
                  <p>○ 승차 위치: 양재시민의숲역 4번 출구</p>
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

        <SectionView
          title="MESSAGE"
          subTitle="따뜻한 방명록을 남겨주세요"
          className="bg-[#eff3e8]"
        >
          <Comments /> 
        </SectionView>
      </div>
    </div>
  );
}
