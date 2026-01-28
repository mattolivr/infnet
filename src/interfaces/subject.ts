import type Assignment from "./assignment";

export default interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  teacher: string;
  assignments: Assignment[];
}
