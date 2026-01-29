import type Subject from "./subject";

export default interface Block {
  id: string;
  name: string;
  icon: string;
  subjects: Subject[];
}
