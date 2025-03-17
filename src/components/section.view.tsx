import classNames from "classnames";

interface SectionViewProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  className?: string;
}

export const SectionView = ({ children, title, subTitle, className }: SectionViewProps) => {
  return (
    <div className={classNames('py-16', className)}>
      <div className="mb-8 tracking-[0.3em]">
        {title && <p className="text-xs font-sometimesTimes">{title}</p>}
        {subTitle && <p className="pt-2">{subTitle}</p>}
      </div>
      {children}
    </div>
  );
};
