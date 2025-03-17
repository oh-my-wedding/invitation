import { format } from "date-fns";

const data = [
  {
    id: '1',
    writer: '현규',
    message: `결혼을 진심으로 축하드립니다~
아아`,
    createdAt: new Date(),
  },
  {
    id: '2',
    writer: '희진',
    message: `결혼축하한다
아아
오
오`,
    createdAt: new Date(),
  },
]

export const Comments = () => {
  return (
    <>
      <div className="px-8">
        {data.map(item => (
          <div key={item.id} className="border bg-white text-card-foreground mb-4 rounded-lg shadow-lg gsap-opacity border-none">
            <div className="p-6 py-6 relative font-suit">
              <button className="absolute top-3.5 right-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12" stroke="#CCCCCC" strokeLinecap="round"></path>
                  <path d="M12 12L4 4" stroke="#CCCCCC" strokeLinecap="round"></path>
                </svg>
              </button>
              <div className="flex flex-col justify-between w-full h-full min-h-24">
                <p className="mb-auto whitespace-pre-wrap break-all text-left font-light">
                  {item.message}
                </p>
              </div>
              <div className="flex items-end justify-between mt-3 text-[0.875em]">
                <div className="max-w-[50%]">
                  <span className="text-[#8c9a6f] text-sm">From </span>
                  <span className="font-light text-sm">{item.writer}</span>
                </div>
                <div className="max-w-[50%]">
                  <p className="font-extralight text-sm">{format(item.createdAt, 'yyyy.MM.dd hh:mm')}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-8 w-full gsap-opacity">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text- px-4 py-2 mt-8 w-full rounded-lg h-12 bg-[#afc18b]">
          메세지 남기기
        </button>
      </div>
    </>
  );
};
