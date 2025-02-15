"use client";

import { useKanbanStore } from "@/app/shared/store/kanban";

import { Draggable } from "@hello-pangea/dnd";
import { type Todo } from "@/app/(pages)/_types/kanban";
import { cn } from "@/app/shared/utils";
import {
  DeleteDialog,
  EditDropdownButton,
  FormDialog,
} from "@/app/(pages)/_components";
import { overlay } from "@/app/shared/lib";

interface TodoItemProps {
  columnId: string;
  todo: Todo;
  index: number;
}

export const TodoItem = ({ columnId, todo, index }: TodoItemProps) => {
  const { updateItem, deleteItem } = useKanbanStore();

  const handleEditTodo = () => {
    overlay.open(
      <FormDialog
        type="todo"
        mode="edit"
        defaultValues={{
          title: todo.title,
          description: todo.description || "",
        }}
        onSubmit={(data) => {
          updateItem(columnId, todo.id, data);
        }}
      />
    );
  };

  const handleDeleteTodo = () => {
    overlay.open(
      <DeleteDialog
        type="todo"
        onDelete={() => deleteItem(columnId, todo.id)}
      />
    );
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn(
            "flex flex-col gap-y-2",
            "p-4 bg-white rounded shadow",
            "relative group",
            snapshot.isDragging && "opacity-50"
          )}
        >
          <div className="flex items-center gap-2">
            <p className="line-clamp-1 truncate text-sm font-semibold">
              {todo.title}
            </p>

            <EditDropdownButton
              type="todo"
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
              className={"absolute right-4 top-4 p-0.5 rounded-sm"}
            />
          </div>

          <p className="text-sm text-gray-500 line-clamp-3 truncate">
            {todo.description}
          </p>
        </div>
      )}
    </Draggable>
  );
};
