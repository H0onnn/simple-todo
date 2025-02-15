import type { Column, Todo } from "@/app/(pages)/_types/kanban";

export interface KanbanState {
  columns: Column[];
}

export interface ColumnActions {
  getColumnDetails: (columnId: string) => Column | null;
  createColumn: (newColumn: Omit<Column, "id" | "items">) => void;
  updateColumn: (
    columnId: string,
    updates: Partial<Omit<Column, "id" | "items">>
  ) => void;
  deleteColumn: (columnId: string) => void;
}

export interface TodoActions {
  getTodoDetails: (columnId: string, todoId: string) => Todo | null;
  createItem: (columnId: string, newItem: Omit<Todo, "id">) => void;
  updateItem: (
    columnId: string,
    itemId: string,
    updates: Partial<Omit<Todo, "id">>
  ) => void;
  deleteItem: (columnId: string, itemId: string) => void;
}

export type KanbanStore = KanbanState & ColumnActions & TodoActions;
