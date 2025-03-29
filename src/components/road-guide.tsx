import Image from "next/image";
import { ArrowRight, Bus, Clock, Navigation, Search, ParkingMeterIcon as Parking } from "lucide-react"
import { CarSvg } from "@/svg/car-svg";
import { BusSvg } from "@/svg/bus-svg";
import { SubwaySvg } from "@/svg/subway.svg";

export const RoadGuide = () => {
  return (
    <div className="py-12 px-8 font-suit text-left flex flex-col">
      <div>
        <div className="flex items-center py-2">
          <span className="mr-2">
            <CarSvg />
          </span>
          <span className="text-[#AFC18B] text-xl">자차 이용 시</span>
        </div>
        <div className="py-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="flex items-center flex-wrap">
                <div className="flex">
                  <Search className={`h-4 w-4 text-gray-500 mr-2`} />
                </div>
                <span>네비게이션 : &apos;헤이스가든&apos; 검색</span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center">
                <Parking className={`h-4 w-4 text-gray-500 mr-2`} />
                <span>도착 후 주차 요원의 안내를 따라주세요.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-8 h-[1px] border"></div>
      
      <div>
        <div className="flex items-center py-2">
          <span className="mr-2">
            <SubwaySvg />
          </span>
          <span className="text-[#AFC18B] text-xl">대중교통 이용 시</span>
        </div>
        <div className="py-4">
          <span className="font-extralight text-sm flex flex-col gap-4">
          <div className="mb-8">
            <div className="flex items-center gap-1 mb-3">
              <Image
                src="/invitation/line-3.svg"
                alt="Line 3"
                width={18}
                height={18}
                priority
              />
              <Image
                src="/invitation/line-shin.svg"
                alt="Line 3"
                width={18}
                height={18}
                priority
              />
              <h4 className="text-base font-medium">양재역 (8, 9번 출구)</h4>
            </div>

            <div className="ml-2 space-y-3">
              <p className="text-sm text-gray-700">정류장: 양재역.서초문화예술회관(중앙)</p>

              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center mt-1 mr-2">
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sm mr-2 text-gray-700">샘마을.서울특별시어린이병원(중앙)</span>
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center bg-amber-400 text-black rounded-sm px-1 mr-1">
                        <Bus className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium">440, 452, 741, 9408</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center mt-1 mr-2">
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sm mr-2 text-gray-700">서울특별시어린이병원.강동송파과학예비군훈련장</span>
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center bg-amber-400 text-black rounded-sm px-1 mr-1">
                        <Bus className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium">9409, 9404</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-3">
              <Image
                src="/invitation/line-shin.svg"
                alt="Line 3"
                width={18}
                height={18}
                priority
              />
              <h4 className="text-base font-medium">양재시민의숲역 (1, 4번 출구)</h4>
            </div>

            <div className="ml-5 space-y-3">
              <p className="text-sm text-gray-700">정류장: 매헌시민의숲(중앙)</p>

              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center mt-1 mr-2">
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sm mr-2 text-gray-700">서울특별시어린이병원.강동송파과학예비군훈련장</span>
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center bg-amber-400 text-black rounded-sm px-1 mr-1">
                        <Bus className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium">9404, 9409</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center mt-1 mr-2">
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sm mr-2 text-gray-700">샘마을.서울특별시어린이병원(중앙)</span>
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center bg-amber-400 text-black rounded-sm px-1 mr-1">
                        <Bus className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium">440, 452, 741, 9408</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </span>
        </div>
      </div>

      <div className="w-full my-8 h-[1px] border"></div>
      
      <div>
        <div className="flex items-center py-2">
          <span className="mr-2">
            <BusSvg />
          </span>
          <span className="text-[#AFC18B] text-xl">셔틀버스 이용 시</span>
        </div>
        <div className="py-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="flex items-center">
                <div className="flex items-start">
                  <Clock className={`h-4 w-4 text-gray-500 mr-2`} />
                </div>
                <span>운행 시간: 10:30 - 14:30, 10분 간격으로 운영</span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center">
                <Navigation className={`h-4 w-4 text-gray-500 mr-2`} />
                <span>승차 위치: 양재시민의숲역 4번 출구</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
