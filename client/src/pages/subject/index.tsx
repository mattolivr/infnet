import { useParams } from "react-router";
import Card from "../../components/card";
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
import { useState, useRef, useMemo } from "react";
import { global } from "../../global.theme";
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
  const { getSubjectById, getBlockById, getId, getRawId } = useManifest();
  const { getGithubUrl, getCodesandboxUrl } = useExternal();

  const [expanded, setExpanded] = useState<string | false>(false);
  const headerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
