import { type ReactNode, type MouseEvent, type TouchEvent } from "react";

import { Button, type ButtonProps } from "./button";
import { type OverlayProps } from "../overlay";

import { cn } from "@/app/shared/utils";

interface BasicDialogProps extends OverlayProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  leftButton?: {
    text?: string;
    className?: string;
    variant?: ButtonProps["variant"];
    onClick?: () => void;
  };
  rightButton?: {
    text?: string;
    className?: string;
    variant?: ButtonProps["variant"];
    onClick?: () => void;
  };
}

export const BasicDialog = ({
  title,
  description,
  children,
  className,
  leftButton,
  rightButton,
  resolve,
}: BasicDialogProps) => {
  const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    resolve?.("Cancel");
  };
  return (
    <section className="relative">
      {/* dimmed */}
      <div
        className="fixed inset-0 z-[9999] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        onClick={handleClose}
      />

      {/* dialog */}
      <div
        className={cn(
          "fixed top-1/2 z-[9999]",
          "w-[365px] sm:w-[425px]",
          "left-1/2 -translate-x-1/2 -translate-y-1/2",
          "grid min-h-0 h-auto gap-4 sm:gap-6",
          "bg-white rounded-[20px] p-4 sm:px-5 sm:py-5 shadow-lg",
          className
        )}
      >
        {/* content */}
        <div className="flex flex-col gap-3 text-left px-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}

          {children}
        </div>

        {/* buttons */}
        <div className="flex items-center gap-2 w-full justify-end">
          {leftButton && (
            <Button
              type="button"
              variant={leftButton.variant || "ghost"}
              className={cn(leftButton.className)}
              onClick={leftButton.onClick || handleClose}
            >
              {leftButton.text || "Cancel"}
            </Button>
          )}
          {rightButton && (
            <Button
              type="submit"
              variant={rightButton.variant || "default"}
              className={cn(rightButton.className)}
              onClick={rightButton.onClick}
            >
              {rightButton.text || "Confirm"}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
