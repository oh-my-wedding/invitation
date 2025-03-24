import { X } from 'lucide-react';
import Avatar from "react-nice-avatar";
import { format } from "date-fns";
import { GuestBookRow } from "@/utils/api";
import { DeleteCommentModal } from '@/components/delete-comment-modal';
import { useState } from 'react';

interface CommentProps {
  data: GuestBookRow;
  refetch: () => Promise<void>;
}

export const Comment = ({ data, refetch }: CommentProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="border bg-white text-card-foreground mb-4 rounded-lg shadow-lg gsap-opacity border-none">
        <div className="p-6 py-6 relative font-suit">
          <button className="absolute top-3.5 right-3 p-2" onClick={() => setIsShow(true)}>
            <X size={16} color="#CCCCCC" />
          </button>
          <div className="flex flex-col justify-between w-full h-full min-h-24">
            <p className="mb-auto whitespace-pre-wrap break-all text-left font-light">
              {data.message}
            </p>
          </div>
          <div className="flex items-end justify-between mt-3 text-[0.875em]">
            <div className="flex max-w-[50%]">
              <span className="text-[#8c9a6f] text-sm mr-1">From</span>
              {data.avatar_config !== null && (
                <div className="mr-1">
                  <Avatar style={{ width: 20, height: 20 }} {...data.avatar_config} />
                </div>
              )}
              <span className="font-light text-sm">{data.writer}</span>
            </div>
            <div className="max-w-[50%]">
              <p className="font-extralight text-sm">{format(data.created_at, 'yyyy.MM.dd hh:mm')}</p>
            </div>
          </div>
        </div>
      </div>
      <DeleteCommentModal isShow={isShow} id={data.id} onClose={() => setIsShow(false)} refetch={refetch} />
    </>
  );
};
