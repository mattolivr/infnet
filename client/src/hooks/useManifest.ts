import { useMemo } from "react";
import manifestData from "../manifest.json";
import type Manifest from "../interfaces/manifest";

export function useManifest() {
  const manifest = useMemo(() => manifestData as Manifest, []);

  const allSubjects = useMemo(() => {
    return manifest.blocks?.flatMap((block) => block.subjects) || [];
  }, [manifest]);

  return {
    manifest,
    blocks: manifest.blocks,
    subjects: allSubjects,

    getBlockById: (id: string) =>
      manifest.blocks?.find((block) => block.id === id),

    getSubjectById: (id: string) =>
      allSubjects.find((subject) => subject.id === id),

    getSubjectsByBlockId: (blockId: string) => {
      const block = manifest.blocks?.find((b) => b.id === blockId);
      return block?.subjects || [];
    },

    getBlockBySubjectId: (subjectId: string) => {
      const blockId = subjectId.split("-")[0];
      return manifest.blocks?.find((block) => block.id === blockId);
    },

    getAssignmentById: (subjectId: string, assignmentId: string) => {
      const subject = allSubjects.find((s) => s.id === subjectId);
      return subject?.assignments?.find((a) => a.id === assignmentId);
    },

    getId: (blockId?: number | string, subjectId?: number | string) => {
      const id = [];

      if (!isNaN(Number(blockId)) && Number(blockId) > 0) {
        id.push(`b${blockId}`);

        if (!isNaN(Number(subjectId)) && Number(subjectId) > 0) {
          id.push(`dr${subjectId}`);
        }
      }
      return id.join("-");
    },

    getRawId: (id?: string) => {
      const matches = id?.match(/\d+/g);
      return matches ? parseInt(matches[matches.length - 1]) : null;
    },
  };
}
