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
    <>
      {header}

      <div
        className={cn([
          paddingTop,
          paddingBottom,
          "min-h-screen w-full mx-auto container px-4 sm:px-6 lg:px-8",
        ])}
      >
        <main className={cn("w-full", className)}>{children}</main>
      </div>
    </>
  );
};
