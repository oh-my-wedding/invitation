interface SectionViewProps {
  children: React.ReactNode;
}

export const SectionView = ({ children }: SectionViewProps) => {
  return (
    <div className="py-16">
      {children}
    </div>
  );
};
