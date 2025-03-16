interface SectionViewProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export const SectionView = ({ children, title, subTitle }: SectionViewProps) => {
  return (
    <div className="py-16">
      <div  className="mb-8 tracking-[0.3em]">
        {title && <p className="text-xs font-sometimesTimes">{title}</p>}
        {subTitle && <p className="pt-2">{subTitle}</p>}
      </div>
      {children}
    </div>
  );
};
