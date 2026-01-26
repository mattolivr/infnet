import { useEffect, useState } from "react";
import { useParams } from "react-router";
import manifest from "../../manifest.json";
import {
  Box,
  Button,
  Chip,
  Container,
  createTheme,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { global } from "../../theme";
import { FaceRounded } from "@mui/icons-material";
import Card from "../../components/card";

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

        <Card />

        <Box
          sx={{ display: "flex", mt: 2, gap: 2, color: "primary.contrastText" }}
        >
          <Box sx={{ flexGrow: 1, backgroundColor: "primary.light" }}>
            light
          </Box>
          <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }}>main</Box>
          <Box sx={{ flexGrow: 1, backgroundColor: "primary.dark" }}>dark</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: 2,
            gap: 2,
            color: "secondary.contrastText",
          }}
        >
          <Box sx={{ flexGrow: 1, backgroundColor: "secondary.light" }}>
            light
          </Box>
          <Box sx={{ flexGrow: 1, backgroundColor: "secondary.main" }}>
            main
          </Box>
          <Box sx={{ flexGrow: 1, backgroundColor: "secondary.dark" }}>
            dark
          </Box>
        </Box>

        <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
          <IconButton color="default">
            <FaceRounded />
          </IconButton>

          <IconButton color="primary">
            <FaceRounded />
          </IconButton>

          <IconButton color="secondary">
            <FaceRounded />
          </IconButton>
        </Box>

        <Box
          sx={{
            backgroundColor: "error.main",
            height: "100vh",
            p: 2,
            borderRadius: 1.5,
            mt: 2,
          }}
        ></Box>
      </Container>
    </ThemeProvider>
  );
}
