import { useParams } from "react-router";
import Card from "../../components/card";
import CardHeader from "../../components/card/header";
import HTMLContent from "../../components/html-content";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Chip,
  styled,
} from "@mui/material";
import Icon from "../../components/icon";
import { useManifest } from "../../hooks/useManifest";

const Assignment = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",

  "&:before": {
    display: "none",
  },

  "&.Mui-expanded": {
    margin: 0,
  },
}));

const AssignmentHeader = styled(AccordionSummary)(({ theme }) => ({
  padding: 0,
  minHeight: "auto",

  "&.Mui-expanded": {
    minHeight: "auto",
  },

  "& .MuiAccordionSummary-content": {
    margin: 0,

    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),

    "&.Mui-expanded": {
      margin: 0,
    },
  },
}));

const AssignmentDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: 0,
  paddingTop: theme.spacing(1),

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(1),
}));

export default function SubjectPage() {
  const { blockId, subjectId } = useParams();
  const { subjects, getSubjectById, getId } = useManifest();

  const subject = getSubjectById(getId(blockId, subjectId) || "");
  if (!subject) {
    // TODO: Retornar uma página 404 adequada
  }
  console.log("subject", subject);

  return (
    <>
      <Card color="primary" floatingIcon={<Icon name={subject?.icon} filled />}>
        <CardHeader title={subject?.name || "Subject"} titleVariant="h2" />
        <Chip
          color="secondary"
          label={`Prof: ${subject?.teacher || "N/A"}`}
          size="small"
        />
      </Card>
      <Card title="Visão Geral">
        <HTMLContent html={subject?.description || ""} />
      </Card>
      {subject?.assignments?.map((assignment, asgmtIndex) => (
        <Card key={`asgmt-${asgmtIndex}`}>
          <Assignment
            slotProps={{ transition: { timeout: 250 } }}
            disableGutters
          >
            <AssignmentHeader expandIcon={<Icon name="expand_more" />}>
              <Avatar>
                <Icon name="deployed_code" />
              </Avatar>
              <CardHeader title={assignment.title} />
            </AssignmentHeader>
            <AssignmentDetails>
              <HTMLContent html={assignment.description || ""} />

              {assignment.tasks.map((task, taskIndex) => (
                <Card key={`asgn-${asgmtIndex}-${taskIndex}`} color="secondary">
                  <CardHeader>
                    <Avatar color="secondary">
                      {(taskIndex + 1).toString().padStart(2, "0")}
                    </Avatar>
                    <CardHeader.Title variant="h3">
                      {task.title}
                    </CardHeader.Title>
                  </CardHeader>
                  <HTMLContent html={task.description} />
                </Card>
              ))}
            </AssignmentDetails>
          </Assignment>
        </Card>
      ))}
    </>
  );
}
