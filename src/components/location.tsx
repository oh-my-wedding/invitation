'use client';

import toast from "react-simple-toasts";
import { Copy } from "lucide-react";

const address = '서울 서초구 신흥안길 40-15';

export const Location = () => {
  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);

    toast('✅ 주소가 복사되었습니다.', { theme: 'light' });
  };

  return (
    <div className="pt-6">
      <p className="tracking-[0.3em] text-lg">헤이스가든</p>
      <div className="flex justify-center items-center pt-2">
        <span className="tracking-[0.1em] text-[#4E4C4B] text-normal mr-4">{address}</span>
        <Copy size={18} strokeWidth={1.5} onClick={handleClickCopy} />
      </div>
    </div>
  );
};
