import { type Column } from "@/app/(pages)/_types/kanban";

import { useKanbanStore } from "@/app/shared/store/kanban";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { TodoItem } from "./todo";
import { cn } from "@/app/shared/utils";
import { Grip } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/shared/components/ui";
import {
  AddButton,
  DeleteDialog,
  EditDropdownButton,
  FormDialog,
} from "@/app/(pages)/_components";
import { overlay } from "@/app/shared/lib";

interface KanbanColumnProps {
  column: Column;
  index: number;
}

export const KanbanColumn = ({ column, index }: KanbanColumnProps) => {
  const { deleteColumn, updateColumn, createItem } = useKanbanStore();

  const handleEditColumn = () => {
    overlay.open(
      <FormDialog
        type="column"
        mode="edit"
        defaultValues={{
          title: column.title,
          description: column.description || "",
        }}
        onSubmit={(data) => {
          updateColumn(column.id, data);
        }}
      />
    );
  };

  const handleDeleteColumn = () => {
    overlay.open(
      <DeleteDialog type="column" onDelete={() => deleteColumn(column.id)} />
    );
  };

  const handleAddTask = () => {
    overlay.open(
      <FormDialog
        type="todo"
        mode="create"
        onSubmit={(data) => createItem(column.id, data)}
      />
    );
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={cn(
            "flex-1 bg-gray-50 flex flex-col h-full min-w-[330px]",
            "border-solid border border-gray-200  rounded-lg",
            snapshot.isDragging && "border-blue-400"
          )}
        >
          <CardHeader className="shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div {...provided.dragHandleProps}>
                  <Grip width={20} height={20} />
                </div>

                <h2 className="text-lg font-bold">{column.title}</h2>

                <div
                  className={cn(
                    "bg-gray-300 rounded-full min-w-4 min-h-4",
                    "text-xs font-semibold",
                    "flex items-center justify-center"
                  )}
                >
                  {column.items?.length}
                </div>
              </div>

              <EditDropdownButton
                type="column"
                size={20}
                onEdit={handleEditColumn}
                onDelete={handleDeleteColumn}
              />
            </div>

            <CardDescription className="text-sm text-gray-600">
              {column.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto">
            <Droppable droppableId={column.id} type="todo">
              {(provided) => (
                <ul
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="min-h-[50px] space-y-2"
                >
                  {column.items?.map((todo, index) => (
                    <li key={todo.id}>
                      <TodoItem
                        columnId={column.id}
                        todo={todo}
                        index={index}
                      />
                    </li>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </CardContent>

          <CardFooter>
            <AddButton onClick={handleAddTask} label="New Task" />
          </CardFooter>
        </Card>
      )}
    </Draggable>
  );
};
