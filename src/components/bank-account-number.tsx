interface BankAccountNumber {
  role: string;
  name: string;
  bankName: string;
  bankNumber: string;
}

export const BankAccountNumber = ({ role, name, bankName, bankNumber }: BankAccountNumber) => {
  return (
    <div className="py-4">
      <div className="my-1">
        <span className="mr-1">{role}</span>
        <span>{name}</span>
      </div>
      <div className="my-1">
        <div>
          <span className="mr-1">{bankName}</span>
          <span className="font-suit">{bankNumber}</span>
        </div>
      </div>
    </div>
  );
};
