"use client";

import { useState } from "react";
import { BasicDialog, Input, Label } from "@/app/shared/components/ui";
import { type OverlayProps } from "@/app/shared/components/overlay";

type DialogType = "column" | "todo";
type ActionType = "create" | "edit";

interface FormData {
  title: string;
  description: string;
}

interface FormDialogProps extends Pick<OverlayProps, "resolve"> {
  type: DialogType;
  mode: ActionType;
  defaultValues?: FormData;
  onSubmit: (data: FormData) => void;
}

const dialogConfig = {
  column: {
    create: {
      title: "Add Column",
      description: "Add a new column to your board",
    },
    edit: {
      title: "Edit Column",
      description: "Edit column details",
    },
  },
  todo: {
    create: {
      title: "Add Todo",
      description: "Add a new todo item",
    },
    edit: {
      title: "Edit Todo",
      description: "Edit todo item details",
    },
  },
};

export const FormDialog = ({
  type,
  mode,
  defaultValues = { title: "", description: "" },
  onSubmit,
  resolve,
}: FormDialogProps) => {
  const [formData, setFormData] = useState<FormData>(defaultValues);

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      return;
    }
    onSubmit(formData);
    resolve?.("Confirm");
  };

  const config = dialogConfig[type][mode];

  return (
    <BasicDialog
      overlayKey={`${type}-${mode}-overlay`}
      title={config.title}
      description={config.description}
      leftButton={{
        text: "Cancel",
      }}
      rightButton={{
        text: mode === "create" ? "Create" : "Save",
        onClick: handleSubmit,
      }}
      resolve={resolve}
    >
      <div className="flex flex-col gap-3">
        <Label htmlFor={`${type}-title`}>Title</Label>
        <Input
          id={`${type}-title`}
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <Label htmlFor={`${type}-description`}>Description</Label>
        <Input
          id={`${type}-description`}
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
    </BasicDialog>
  );
};
