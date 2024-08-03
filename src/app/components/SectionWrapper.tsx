import type { ReactNode } from "react";

interface SectionWrapperProps {
  children?: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <div className={className}>
      <div className="mx-auto px-0 md:px-16">{children}</div>
    </div>
  );
};

export default SectionWrapper;
