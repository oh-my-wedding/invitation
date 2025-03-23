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
    <div className="py-4">
      <div className="my-1">
        <span className="mr-1">{role}</span>
        <span>{name}</span>
      </div>
      <div className="my-1 flex items-center justify-between">
        <div>
          <span className="font-suit mr-1">{bankName}</span>
          <span className="font-suit">{bankNumber}</span>
        </div>
        <div>
          <Copy size={20} onClick={handleClickCopy} />
        </div>
      </div>
    </div>
  );
};
