import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";

const theme = themeOptions;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="container">teste</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
