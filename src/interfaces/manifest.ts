import type Block from "./block";

export default interface Manifest {
  version: string;
  title: string;
  subtitle: string;
  description: string;
  generatedAt: string;
  blocks: Block[];
}
