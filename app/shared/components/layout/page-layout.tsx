import { type ReactNode } from "react";
import { cn } from "@/app/shared/utils";

interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  isPaddingTop?: boolean;
}

export const PageLayout = ({
  children,
  header,
  className,
  isPaddingTop = true,
}: PageLayoutProps) => {
  const paddingBottom = header !== null ? "pb-10" : "pb-0";
  const paddingTop = header !== null && isPaddingTop ? "pt-[62px]" : "pt-0";

  return (
    <div className="h-screen flex flex-col">
      {header}

      <div
        className={cn([
          paddingTop,
          paddingBottom,
          "flex-1 w-full mx-auto container px-4 sm:px-6 lg:px-8 overflow-auto",
        ])}
      >
        <main className={cn("w-full h-full flex flex-col", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};
