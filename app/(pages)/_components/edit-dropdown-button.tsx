import { Pencil, Trash2 } from "lucide-react";

import {
  MenuButton,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/shared/components/ui";

type DropdownType = "column" | "todo";

interface EditDropdownButtonProps {
  type: DropdownType;
  size?: number;
  className?: string;
  align?: "start" | "end" | "center";
  onEdit: () => void;
  onDelete: () => void;
}

const dropdownConfig = {
  column: {
    label: "Column",
  },
  todo: {
    label: "Todo",
  },
};

export const EditDropdownButton = ({
  type,
  size,
  className,
  align,
  onEdit,
  onDelete,
}: EditDropdownButtonProps) => {
  return (
    <MenuButton size={size} className={className} align={align}>
      <DropdownMenuLabel className="font-semibold text-xs text-gray-500">
        {dropdownConfig[type].label}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuItem
        role="button"
        className="flex items-center gap-2"
        onClick={onEdit}
      >
        <Pencil size={14} /> Edit
      </DropdownMenuItem>
      <DropdownMenuItem
        role="button"
        className="flex items-center gap-2 text-red-500"
        onClick={onDelete}
      >
        <Trash2 size={14} /> Delete
      </DropdownMenuItem>
    </MenuButton>
  );
};
