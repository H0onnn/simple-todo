"use client";

import { DragDropContext } from "@hello-pangea/dnd";
import { useDnd } from "@/app/(pages)/_hooks";
import { useKanbanStore } from "@/app/shared/store/kanban";
import { useIsClient } from "@/app/shared/hooks";

import { Columns } from "./columns";
import { KanbanSkeleton } from "./skeleton";

export const KanbanBoards = () => {
  const isClient = useIsClient();
  const { columns } = useKanbanStore();
  const { onDragEnd } = useDnd(columns);

  if (!isClient) {
    return <KanbanSkeleton />;
  }

  if (columns.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-sm md:text-xl">No columns available</span>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-x-auto h-full">
        <Columns columns={columns} />
      </div>
    </DragDropContext>
  );
};
