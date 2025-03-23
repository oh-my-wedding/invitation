'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import classNames from "classnames";
import { X } from 'lucide-react';
import { AvatarFullConfig } from "react-nice-avatar";

const RandomAvatar = dynamic(() => import('@/components/random-avatar'),
{ ssr: false }
);

export type WriteCommentData = {
  name: string;
  password: string;
  message: string;
  avatarConfig: AvatarFullConfig | null; 
};

interface WriteCommentModalProps {
  isShow: boolean;
  onSubmit: (data: WriteCommentData) => void;
  onClose: () => void;
}

export const WriteCommentModal = ({ isShow, onSubmit, onClose }: WriteCommentModalProps) => {
  const [data, setData] = useState<WriteCommentData>({
    name: '',
    password: '',
    message: '',
    avatarConfig: null,
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleChangeAvatar = (config: AvatarFullConfig) => {
    setData(prev => ({
      ...prev,
      avatarConfig: config,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(data);
  };

  return (
    <div className={classNames("overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex", { hidden: !isShow })}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-sm">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">
                축하 메세지 작성하기
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5 text-left" onSubmit={handleSubmit}>
              <div className="mb-4">
                <RandomAvatar onChange={handleChangeAvatar} />
              </div>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">작성자 성함</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="성함을 남겨주세요"
                    onChange={handleChangeInput}
                    value={data.name}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">비밀번호</label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={handleChangeInput}
                    value={data.password}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">본문</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="200자 이내로 작성해주세요"
                    onChange={handleChangeInput}
                    value={data.message}
                  ></textarea>                    
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-[#afc18b] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                작성 완료
              </button>
            </form>
        </div>
      </div>
    </div> 
  );
};
