import { useParams } from "react-router";
import Card from "../../components/card";
import CardHeader from "../../components/card/header";
import HTMLContent from "../../components/html-content";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Chip,
  createTheme,
  IconButton,
  styled,
  ThemeProvider,
} from "@mui/material";
import Icon from "../../components/icon";
import { useManifest } from "../../hooks/useManifest";
import { useState, useRef } from "react";
import { global } from "../../theme";
import type Assignment from "../../interfaces/assignment";
import useExternal from "../../hooks/useExternal";

const AssignmentAccordion = styled(Accordion)(({ theme }) => ({
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
  const { getSubjectById, getId } = useManifest();
  const { getGithubUrl, getCodesandboxUrl } = useExternal();

  const [expanded, setExpanded] = useState<string | false>(false);
  const headerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);

      if (newExpanded) {
        setTimeout(() => {
          const headerElement = headerRefs.current[panel];
          if (headerElement) {
            headerElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 250);
      }
    };

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
          <AssignmentAccordion
            expanded={expanded === `panel${asgmtIndex}`}
            onChange={handleChange(`panel${asgmtIndex}`)}
            slotProps={{ transition: { timeout: 250 } }}
            disableGutters
          >
            <AssignmentHeader
              ref={(el) => {
                headerRefs.current[`panel${asgmtIndex}`] = el;
              }}
              expandIcon={<Icon name="expand_more" />}
            >
              <Avatar>
                <Icon name={getIconType(assignment)} />
              </Avatar>
              <CardHeader title={assignment.title} />
            </AssignmentHeader>
            <AssignmentDetails>
              <Box sx={{ padding: global.spacing(1) }}>
                <HTMLContent html={assignment.description || ""} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingBlock: global.spacing(1),
                  gap: global.spacing(1),
                }}
              >
                <Button color="secondary">
                  <Icon name="folder_code" /> Ver no repositório
                </Button>
                <Button>
                  <Icon name="file_export" /> Exportar para PDF
                </Button>
              </Box>

              {assignment.tasks.map((task, taskIndex) => (
                <Card key={`asgn-${asgmtIndex}-${taskIndex}`} color="secondary">
                  <CardHeader>
                    <Avatar color="secondary">
                      {(taskIndex + 1).toString().padStart(2, "0")}
                    </Avatar>
                    <CardHeader.Title variant="h3">
                      {task.title}
                    </CardHeader.Title>
                    <IconButton>
                      <Icon name="arrow_outward" filled />
                    </IconButton>
                  </CardHeader>
                  <span>{getCodesandboxUrl(task.file)}</span>
                  <Box sx={{ padding: global.spacing(1) }}>
                    <HTMLContent html={task.description || ""} />
                  </Box>
                </Card>
              ))}
            </AssignmentDetails>
          </AssignmentAccordion>
        </Card>
      ))}
    </>
  );
}

function getIconType(assignment: Assignment): string {
  switch (assignment.type) {
    case "project":
      return "drive_folder_upload";
    case "assessment":
      return "stacks";
    case "tasklist":
      return "deployed_code";
    default:
      return "check";
  }
}
