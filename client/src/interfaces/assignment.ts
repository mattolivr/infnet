import type Task from "./task";

export default interface Assignment {
  id: string;
  subjectId: string;

  title: string;
  description?: string;
  type: "tasklist" | "assessment" | "project";
  dueDate?: string;

  tasks: Task[];
}
