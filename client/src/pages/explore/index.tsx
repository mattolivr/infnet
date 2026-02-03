import { styled, ThemeProvider } from "@mui/material";
import { explore } from "./theme";
import Card, { CardHeader } from "../../components/card";
import { useParams } from "react-router";
import { useManifest } from "../../hooks/useManifest";
import React, { useMemo } from "react";

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

interface ResultCardProps {
  icon?: string;
  title: string;
}

const ResultCardRoot = styled(Card, {
  name: "ResultCard",
  slot: "root",
})();

function ResultCard({ icon, title }: ResultCardProps) {
  return (
    <ResultCardRoot>
      <CardHeader icon={icon} title={title} />
      teste
    </ResultCardRoot>
  );
}
