import { Column } from "@/app/(pages)/_types/kanban";

export const initialColumns: Column[] = [
  {
    id: "column-1",
    title: "Todo",
    description: "This item hasn't been started",
    items: [
      {
        id: "todo-1",
        title: "Todo 1",
        description: "This is a todo item",
      },
      {
        id: "todo-2",
        title: "Todo 2",
        description: "This is a todo item",
      },
    ],
  },
  {
    id: "column-2",
    title: "In Progress",
    description: "This is actively being worked on",
    items: [],
  },
  {
    id: "column-3",
    title: "Done",
    description: "This has been completed",
    items: [],
  },
];
