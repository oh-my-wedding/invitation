import classNames from "classnames";

interface SectionViewProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  className?: string;
}

export const SectionView = ({ children, title, subTitle, className }: SectionViewProps) => {
  return (
    <div className={classNames('py-24', className)}>
      {(!!title || !!subTitle) && (
        <div className="mb-12 tracking-[0.3em]">
          {title && <p className="text-sm font-sometimesTimes">{title}</p>}
          {subTitle && <p className="pt-2 text-lg">{subTitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};
