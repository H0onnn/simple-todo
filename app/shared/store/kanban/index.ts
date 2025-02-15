import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialColumns } from "@/app/(pages)/_mock/data";
import { KanbanStore } from "./types";
import { createColumnSlice } from "./column-slice";
import { createTodoSlice } from "./todo-slice";

export const useKanbanStore = create<KanbanStore>()(
  persist(
    (...a) => ({
      columns: initialColumns,
      ...createColumnSlice(...a),
      ...createTodoSlice(...a),
    }),
    {
      name: "kanban-storage",
    }
  )
);
