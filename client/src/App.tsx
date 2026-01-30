import { Route, Routes } from "react-router";
import { global } from "./theme";
import { ThemeProvider } from "@mui/material";
import BaseLayout from "./pages/layouts/base";
import HomePage from "./pages/home";
import SubjectPage from "./pages/subject";

const theme = global;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route
            path="block/:blockId/subject/:subjectId"
            element={<SubjectPage />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
