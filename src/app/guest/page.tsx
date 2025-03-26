import Image from "next/image";

import { KakaoMaps } from "@/components/kakao-maps";
import { Comments } from "@/components/comments";
import { SectionView } from "@/components/section.view";
import { Calendar } from "@/components/calendar";
import { NaverMapButton } from "@/components/naver-map-button";
import { KakaoMapButton } from "@/components/kakao-map-button";
import { TMapButton } from "@/components/tmap-button";
import { Gallery } from "@/components/gallery";
import { CDN_URL } from "@/constants/url";
import { RoadGuide } from "@/components/road-guide";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] relative flex flex-col justify-center items-center">
      <div className="bg-[#fcfaf8] relative h-full w-full max-w-[430px] shadow-lg text-center">

        <div className="relative bg-[#ffffff] shadow-sm font-suit">
          <div className="relative w-full text-white">
            <div className="whitespace-normal w-full absolute top-24 z-10 px-[17px]">
              <img src={CDN_URL + '/wedding-text.png'} />  
            </div>
            <img
              src={CDN_URL + '/banner.jpg'}
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
          <div className="flex justify-center mb-12">
            <Image
              src="/invitation/images/duckboon-char.png"
              alt="Main Image"
              width={64}
              height={64}
            />
          </div>
          <div className="tracking-[0.2em] leading-[2em] font-suit font-extralight tracking-normal">
            <p>우연한 만남이 소중한 인연이 되었습니다.</p>

            <br />

            <p>서로 다른 길을 걷던 두 사람이 만나</p>
            <p>대화를 나누고 마음을 나누며 사랑이 되었습니다.</p>

            <br />

            <p>비슷함에 웃고 다름을 배워가며 함께한 시간들,</p>
            <p>이제 부부로서 새로운 시작을 하려 합니다.</p>

            <br />

            <p>푸르른 봄날, 저희의 새 시작을</p>
            <p>함께해 주시면 감사드리겠습니다.</p>
            
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

        <SectionView title="CASTING" subTitle="등장인물" className="pb-0 bg-white shadow-sm">
          <div className="w-full h-full">
            <img
              className="w-full h-auto"
              src={`${CDN_URL}/casting.jpg`}
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
            <div className="px-2 flex justify-between">
              <NaverMapButton />
              <KakaoMapButton />
              <TMapButton />
            </div>
          </div>

          <RoadGuide />
        </SectionView>
          
        <SectionView title="GALLERY" subTitle="갤러리" className="bg-white shadow-sm">
          <Gallery />
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
