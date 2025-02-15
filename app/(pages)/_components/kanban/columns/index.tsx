import { Droppable } from "@hello-pangea/dnd";
import type { Column } from "@/app/(pages)/_types/kanban";
import { KanbanColumn } from "./column";

interface Props {
  columns: Column[];
}

export const Columns = ({ columns }: Props) => {
  return (
    <Droppable droppableId="columns" type="column" direction="horizontal">
      {(provided) => (
        <section
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex justify-between space-x-2 h-full min-w-fit"
        >
          {columns.map((column, index) => (
            <KanbanColumn key={column.id} column={column} index={index} />
          ))}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
};
