import { BasicDialog } from "@/app/shared/components/ui";
import { type OverlayProps } from "@/app/shared/components/overlay";

type DialogType = "column" | "todo";

interface DeleteDialogProps extends Pick<OverlayProps, "resolve"> {
  type: DialogType;
  onDelete: () => void;
}

const dialogConfig = {
  column: {
    title: "Delete Column",
    description: "Are you sure you want to delete this item from this project?",
  },
  todo: {
    title: "Delete Todo",
    description: "Are you sure you want to delete this item from this project?",
  },
};

export const DeleteDialog = ({
  type,
  onDelete,
  resolve,
}: DeleteDialogProps) => {
  return (
    <BasicDialog
      overlayKey={`add-${type}-overlay`}
      title={dialogConfig[type].title}
      description={dialogConfig[type].description}
      leftButton={{
        text: "Cancel",
      }}
      rightButton={{
        text: "Delete",
        variant: "destructive",
        onClick: () => {
          onDelete();
          resolve?.("Delete");
        },
      }}
      resolve={resolve}
    />
  );
};
