'use client';

import { Copy } from 'lucide-react';
import toast from 'react-simple-toasts';

interface BankAccountNumber {
  role: string;
  name: string;
  bankName: string;
  bankNumber: string;
}

export const BankAccountNumber = ({ role, name, bankName, bankNumber }: BankAccountNumber) => {
  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(`${bankName} ${bankNumber}`);

    toast('✅ 계좌번호가 복사되었습니다.', { theme: 'light' });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <div className="my-1 text-sm font-suit">
        <span className="mr-1">{role}</span>
        <span>{name}</span>
      </div>
      <div className="mt-3 flex items-center justify-between bg-gray-100 p-3 rounded-xl">
        <div className="flex flex-col text-sm">
          <span className="font-suit mr-1 text-gray-500">{bankName}</span>
          <span className="font-suit">{bankNumber}</span>
        </div>
        <div>
          <Copy size={18} strokeWidth={1.5} onClick={handleClickCopy} />
        </div>
      </div>
    </div>
  );
};
