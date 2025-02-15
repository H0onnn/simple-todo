import type { StateCreator } from "zustand";
import type { KanbanState, ColumnActions } from "./types";
import type { Column } from "@/app/(pages)/_types/kanban";

export const createColumnSlice: StateCreator<
  KanbanState & ColumnActions,
  [],
  [],
  ColumnActions
> = (set, get) => ({
  getColumnDetails: (columnId: string) => {
    const { columns } = get();
    return columns.find((column) => column.id === columnId) || null;
  },

  createColumn: (newColumn) => {
    const column: Column = {
      id: `column-${Date.now()}`,
      items: [],
      ...newColumn,
    };
    set((state) => ({ columns: [...state.columns, column] }));
  },

  updateColumn: (columnId, updates) => {
    const targetColumn = get().getColumnDetails(columnId);
    if (!targetColumn) return;

    const updatedColumn = { ...targetColumn, ...updates };
    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === columnId ? updatedColumn : column
      ),
    }));
  },

  deleteColumn: (columnId) => {
    set((state) => ({
      columns: state.columns.filter((column) => column.id !== columnId),
    }));
  },
});
