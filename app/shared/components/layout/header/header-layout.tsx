import { type ReactNode } from "react";
import { cn } from "@/app/shared/utils";

interface HeaderLayoutProps {
  children?: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
}

export const HeaderLayout = (props: HeaderLayoutProps) => {
  const { children, leftSlot, rightSlot, className } = props;

  return (
    <header
      className={cn([
        "fixed top-0 left-0 right-0 flex items-center justify-center h-[62px]",
        "bg-white z-50 shadow-sm",
        "border-b border-solid border-border",
        className,
      ])}
    >
      <div className="container relative">
        {leftSlot && (
          <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2">
            {leftSlot}
          </div>
        )}

        {children && children}

        {rightSlot && (
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>
    </header>
  );
};
