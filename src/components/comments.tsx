'use client';

import { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';

import { WriteCommentModal } from "@/components/write-comment-modal";
import { Comment } from "@/components/comment";
import { getGuestBook, GuestBookRow } from "@/utils/api";

const size = 5;

export const Comments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [data, setData] = useState<GuestBookRow[]>([]);

  useEffect(() => {
    getGuestBook().then(setData);
  }, []);

  const handleClickMore = () => {
    setPage(prev => prev + 1);
  };

  const hasMore = page * size < data.length;

  return (
    <>
      <div className="px-8">
        {data.slice(0, page * size).map(item => (
          <Comment key={item.id} data={item} />
        ))}
      </div>
      {hasMore && (
        <div className="flex items-center justify-center mx-8 h-8 text-gray-600" onClick={handleClickMore}>
          <ChevronDown strokeWidth={1} />
          <p className="ml-2">더보기</p>
        </div>
      )}
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
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
