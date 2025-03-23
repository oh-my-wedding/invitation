'use client';

import { useEffect, useState } from "react";
import Avatar from "react-nice-avatar";
import { format } from "date-fns";

import { WriteCommentData, WriteCommentModal } from "@/components/write-comment-modal";
import { getGuestBook, GuestBookRow, writeGuestBook } from "@/utils/api";

export const Comments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState<GuestBookRow[]>([]);

  useEffect(() => {
    getGuestBook().then(setData);
  }, []);

  const handleSubmit = async (data: WriteCommentData) => {
    await writeGuestBook({
      writer: data.name,
      password: data.password,
      message: data.message,
      avatar_config: data.avatarConfig,
    });

    setIsModalOpen(false);
  };

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
                <div className="flex max-w-[50%]">
                  <span className="text-[#8c9a6f] text-sm mr-1">From</span>
                  {item.avatar_config !== null && (
                    <div className="mr-1">
                      <Avatar style={{ width: 20, height: 20 }} {...item.avatar_config} />
                    </div>
                  )}
                  <span className="font-light text-sm">{item.writer}</span>
                </div>
                <div className="max-w-[50%]">
                  <p className="font-extralight text-sm">{format(item.created_at, 'yyyy.MM.dd hh:mm')}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-8 w-full gsap-opacity">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white px-4 py-2 mt-8 w-full rounded-lg h-12 bg-[#afc18b]"
          onClick={() => setIsModalOpen(true)}
        >
          메세지 남기기
        </button>
      </div>
      <WriteCommentModal
        isShow={isModalOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
