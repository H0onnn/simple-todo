"use client";

import { useKanbanStore } from "@/app/shared/store/kanban";

import { AddButton, FormDialog } from "@/app/(pages)/_components";
import { overlay } from "@/app/shared/lib";

export const Title = () => {
  const { createColumn } = useKanbanStore();

  const handleAddColumn = () => {
    overlay.open(
      <FormDialog
        type="column"
        mode="create"
        onSubmit={(data) => {
          createColumn({
            title: data.title,
            description: data.description,
          });
        }}
      />
    );
  };

  return (
    <div className="my-3 flex items-center justify-between">
      <span className="text-sm md:text-xl">
        Manage your schedule simply and conveniently
      </span>

      <AddButton onClick={handleAddColumn} isIconOnly />
    </div>
  );
};
