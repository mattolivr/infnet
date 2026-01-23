import { useState } from "react";
import "./App.css";
import { themeOptions } from "./theme";
import { Button, ThemeProvider } from "@mui/material";
import { FolderSpecialRounded, HouseSiding } from "@mui/icons-material";

const theme = themeOptions;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button startIcon={<FolderSpecialRounded />}>Sobre o projeto</Button>
    </ThemeProvider>
  );
}

export default App;
