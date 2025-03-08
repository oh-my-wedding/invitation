import { KakaoTalk } from "@/components/kakao-talk";

export const Comments = () => {
  return (
    <div>
      <h2>축하 인사 남기기</h2>
      <div className="flex flex-col w-full max-w-md h-[600px] bg-white rounded-xl overflow-hidden shadow-lg">
        <KakaoTalk />
      </div>
    </div>
  )
};
