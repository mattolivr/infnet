import { useParams } from "react-router";
import Card from "../../components/card";
import HTMLContent from "../../components/html-content";
import { Button } from "@mui/material";
import Icon from "../../components/icon";
import { useManifest } from "../../hooks/useManifest";
import { useMemo, useEffect } from "react";
import { useHeader } from "../../components/layout/header/context";

export default function SubjectPage() {
  const { blockId, subjectId } = useParams();
  const { getSubjectById, getBlockById, getId, getRawId } = useManifest();
  const { setPagename } = useHeader();

  const subject = useMemo(
    () => getSubjectById(getId(blockId, subjectId) || ""),
    [blockId, subjectId, getSubjectById, getId],
  );

  const block = useMemo(
    () => getBlockById(getId(blockId) || ""),
    [blockId, getBlockById, getId],
  );

  if (!subject) {
    // TODO: Retornar uma página 404 adequada
  }

  useEffect(() => {
    if (subject) {
      setPagename(subject.name);
    }
  }, [subject, setPagename]);

  return (
    <>
      <Card title="Visão Geral">
        <HTMLContent html={subject?.description || ""} />
      </Card>
      <Button color="secondary">
        <Icon name="folder_data" />
        Ver no repositório
      </Button>
      <Card title={subject?.teacher} icon="person" subtitle="Professor(a)" />
      <Card
        title={block?.name}
        icon="cards_stack"
        subtitle={`Bloco ${getRawId(blockId)}`}
      />
    </>
  );
}
