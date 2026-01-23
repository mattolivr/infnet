import "./App.css";
import Header from "./components/layout/header";
import { global } from "./theme";
import { ThemeProvider } from "@mui/material";

const theme = global;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="container">
          <Header />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
