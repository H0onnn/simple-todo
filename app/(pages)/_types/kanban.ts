export interface Todo {
  id: string;
  title: string;
  description: string;
}

export interface Column extends Todo {
  items?: Todo[];
}

export interface Kanban {
  columns: Column[];
}

export type DragType = "column" | "todo";
