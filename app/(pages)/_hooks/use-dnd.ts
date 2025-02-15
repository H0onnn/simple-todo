import { type DropResult } from "@hello-pangea/dnd";
import type { Column } from "@/app/(pages)/_types/kanban";
import { useKanbanStore } from "@/app/shared/store/kanban";

export const useDnd = (columns: Column[]) => {
  const setColumns = useKanbanStore.setState;

  const handleColumnDrag = (sourceIndex: number, destinationIndex: number) => {
    const newColumns = Array.from(columns);
    const [removed] = newColumns.splice(sourceIndex, 1);
    newColumns.splice(destinationIndex, 0, removed);
    setColumns({ columns: newColumns });
  };

  const handleTodoDrag = (
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => {
    const newColumns = Array.from(columns);
    const sourceColumn = newColumns.find((col) => col.id === sourceColumnId)!;
    const destinationColumn = newColumns.find(
      (col) => col.id === destinationColumnId
    )!;

    const newSourceItems = Array.from(sourceColumn.items ?? []);
    const [movedItem] = newSourceItems.splice(sourceIndex, 1);

    if (sourceColumnId === destinationColumnId) {
      newSourceItems.splice(destinationIndex, 0, movedItem);
      sourceColumn.items = newSourceItems;
    } else {
      const newDestinationItems = Array.from(destinationColumn.items ?? []);
      newDestinationItems.splice(destinationIndex, 0, movedItem);
      sourceColumn.items = newSourceItems;
      destinationColumn.items = newDestinationItems;
    }

    setColumns({ columns: newColumns });
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (type === "column") {
      handleColumnDrag(source.index, destination.index);
      return;
    }

    handleTodoDrag(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
  };

  return { onDragEnd };
};
