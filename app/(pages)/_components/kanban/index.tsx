"use client";

import { DragDropContext } from "@hello-pangea/dnd";

import { useDnd } from "@/app/(pages)/_hooks";
import { useKanbanStore } from "@/app/shared/store/kanban";

import { Columns } from "./columns";

export const KanbanBoards = () => {
  const { columns } = useKanbanStore();
  const { onDragEnd } = useDnd(columns);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-x-auto h-full">
        <Columns columns={columns} />
      </div>
    </DragDropContext>
  );
};
