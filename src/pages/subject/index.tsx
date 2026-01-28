import { useParams } from "react-router";
import Card from "../../components/card";
import CardHeader from "../../components/card/header";
import { Chip } from "@mui/material";
import Icon from "../../components/icon";
import { useManifest } from "../../hooks/useManifest";

export default function SubjectPage() {
  const { blockId, subjectId } = useParams();
  const { subjects, getSubjectById, getId } = useManifest();

  console.log("id", getId(blockId, subjectId));

  const subject = getSubjectById(getId(blockId, subjectId) || "");
  if (!subject) {
    // TODO: Retornar uma página 404 adequada
  }
  console.log("subject", subject);

  return (
    <>
      <Card
        color="primary"
        floatingIcon={<Icon name="dashboard_2_gear" filled />}
      >
        <CardHeader title={subject?.name || "Subject"} titleVariant="h2" />
        <Chip
          color="secondary"
          label={`Prof: ${subject?.teacher || "N/A"}`}
          size="small"
        />
      </Card>
      <Card title="Visão Geral">{subject?.description}</Card>
    </>
  );
}
