import { type ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/shared/components/ui";
import { Ellipsis } from "lucide-react";

interface MenuButtonProps {
  children: ReactNode;
  size?: number;
  align?: "start" | "end" | "center";
  className?: string;
}

export const MenuButton = ({
  children,
  className,
  size = 14,
  align = "end",
}: MenuButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={className}>
          <Ellipsis size={size} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={align}>{children}</DropdownMenuContent>
    </DropdownMenu>
  );
};
