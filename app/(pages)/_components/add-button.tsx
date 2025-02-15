import { type ReactNode } from "react";

import { Plus } from "lucide-react";
import { Button } from "@/app/shared/components/ui";

interface AddButtonProps {
  onClick: () => void;
  label?: ReactNode;
  isIconOnly?: boolean;
}

export const AddButton = ({
  onClick,
  label,
  isIconOnly = false,
}: AddButtonProps) => {
  return (
    <Button
      variant="ghost"
      size={isIconOnly ? "icon" : "default"}
      onClick={onClick}
    >
      <Plus />
      {label && label}
    </Button>
  );
};
