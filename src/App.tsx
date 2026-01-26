import { Route, Routes } from "react-router";
import { global } from "./theme";
import { ThemeProvider } from "@mui/material";
import MainLayout from "./pages/layouts/main";
import HomePage from "./pages/home";
import SubjectPage from "./pages/subject";

const theme = global;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="bloco/:blockId/materia/:subjectId"
            element={<SubjectPage />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
