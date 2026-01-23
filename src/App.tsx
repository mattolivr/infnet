import "./App.css";
import Header from "./components/layout/header";
import Menu from "./components/layout/menu";
import { global } from "./theme";
import { ThemeProvider } from "@mui/material";
import { MenuProvider } from "./components/layout/menu/context";

const theme = global;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <div className="app">
          <div id="container">
            <Header />
            <Menu />
            teste
          </div>
        </div>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
