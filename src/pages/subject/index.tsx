import { useEffect, useState } from "react";
import { useParams } from "react-router";
import manifest from "../../manifest.json";
import {
  Box,
  Chip,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { global } from "../../theme";
import { FaceRounded, PersonRounded } from "@mui/icons-material";

const subjectTheme = createTheme(global, {
  components: {
    MuiContainer: {
      defaultProps: {
        sx: {
          px: {
            xs: 2,
            sm: 0,
          },
          py: {
            xs: 1,
            sm: 0,
          },
          display: "flex",
          flexDirection: "column",
          gap: 1,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        sx: {
          mt: 1,
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          fontWeight: "500",
          "& .MuiChip-icon": {
            color: "primary.contrastText",
          },
        },
      },
    },
  },
});

export default function SubjectPage() {
  const { blockId, subjectId } = useParams();

  const block = manifest.find((b) => b.id === blockId);
  const subject = block?.subjects.find((s) => s.id === subjectId);

  console.log("subject", subject);

  return (
    <ThemeProvider theme={subjectTheme}>
      <Container disableGutters>
        <Box
          sx={{ backgroundColor: "secondary.main", p: 2, borderRadius: 1.5 }}
        >
          <Typography
            variant="h5"
            component="h2"
            color="secondary.contrastText"
            fontWeight="500"
          >
            {subject?.name}
          </Typography>
          <Chip
            label={`${subject?.teacher || "Não informado"}`}
            icon={<FaceRounded />}
          />
        </Box>

        <Box>teste</Box>
      </Container>
    </ThemeProvider>
  );
}
