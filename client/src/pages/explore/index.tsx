import { styled, ThemeProvider } from "@mui/material";
import { explore } from "./theme";
import Card from "../../components/card";
import { useParams } from "react-router";
import { useManifest } from "../../hooks/useManifest";
import React, { useMemo } from "react";
const ResultCard = styled(Card, {
  name: "ResultCard",
  slot: "root",
})();

export default function ExplorePage() {
  const { blockId } = useParams();
  const { blocks, getBlockById, getId } = useManifest();

  const block = useMemo(
    () => getBlockById(getId(blockId) || ""),
    [blockId, getBlockById, getId],
  );

  let items: React.ReactNode[] = [];

  if (block && block.subjects) {
    items = block.subjects.map((subject) => (
      <ResultCard key={subject.id} title={subject.name || "Untitled"} />
    ));
  } else {
    items = blocks.map((block) => (
      <ResultCard key={block.id} icon={block.icon} title={block.name} />
    ));
  }

  return <ThemeProvider theme={explore}>{items}</ThemeProvider>;
}
