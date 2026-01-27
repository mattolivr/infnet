import { useParams } from "react-router";
import manifest from "../../manifest.json";
import Card from "../../components/card";
import CardHeader from "../../components/card/header";
import { Chip } from "@mui/material";
import Icon from "../../components/icon";

export default function SubjectPage() {
  const { blockId, subjectId } = useParams();

  const block = manifest.find((b) => b.id === blockId);
  const subject = block?.subjects.find((s) => s.id === subjectId);

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
