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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-x-auto h-full">
        <Columns columns={columns} />
      </div>
    </DragDropContext>
  );
};
