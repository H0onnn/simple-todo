import type { StateCreator } from "zustand";
import type { KanbanState, TodoActions, ColumnActions } from "./types";
import type { Todo } from "@/app/(pages)/_types/kanban";

export const createTodoSlice: StateCreator<
  KanbanState & ColumnActions & TodoActions,
  [],
  [],
  TodoActions
> = (set, get) => ({
  getTodoDetails: (columnId: string, todoId: string) => {
    const targetColumn = get().getColumnDetails(columnId);
    if (!targetColumn) return null;

    return targetColumn.items?.find((item) => item.id === todoId) || null;
  },

  createItem: (columnId: string, newItem: Omit<Todo, "id">) => {
    const item: Todo = {
      id: `todo-${Date.now()}`,
      ...newItem,
    };

    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === columnId
          ? { ...column, items: [...(column.items || []), item] }
          : column
      ),
    }));
  },

  updateItem: (
    columnId: string,
    itemId: string,
    updates: Partial<Omit<Todo, "id">>
  ) => {
    const targetTodo = get().getTodoDetails(columnId, itemId);
    if (!targetTodo) return;

    const updatedTodo = { ...targetTodo, ...updates };

    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              items: (column.items || []).map((item) =>
                item.id === itemId ? updatedTodo : item
              ),
            }
          : column
      ),
    }));
  },

  deleteItem: (columnId: string, itemId: string) => {
    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              items: (column.items || []).filter((item) => item.id !== itemId),
            }
          : column
      ),
    }));
  },
});
