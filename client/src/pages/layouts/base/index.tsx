import { Outlet } from "react-router";
import Header, { LogoIcon } from "../../../components/layout/header";
import Menu from "../../../components/layout/menu";
import { MenuProvider } from "../../../components/layout/menu/context";
import {
  CssBaseline,
  styled,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Nav from "../../../components/layout/nav";
import { global } from "../../../global.theme";
import { header } from "../../../components/layout/header/theme";

const LayoutRoot = styled("div", {
  name: "BaseLayout",
  slot: "root",
})(({ theme }) => ({
  background: theme.palette.background.lightBlueGradient,
  width: "100%",
  minHeight: "100lvh",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: theme.typography.body1.letterSpacing,
  fontFamily: theme.typography.body1.fontFamily,

  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr",

    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },
}));

const Main = styled("main", {
  name: "Base Layout",
  slot: "main",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    gap: theme.spacing(2),
  },
}));

export default function BaseLayout() {
  const medium = useMediaQuery(global.breakpoints.up("md"));

  return (
    <ThemeProvider theme={global}>
      <CssBaseline />
      <MenuProvider>
        <Menu mobile />
        <LayoutRoot>
          {medium && (
            <ThemeProvider theme={header}>
              <LogoIcon />
            </ThemeProvider>
          )}
          <Header />
          {medium && <Nav />}
          <Main>
            <Outlet />
          </Main>
          {!medium && <Nav />}
        </LayoutRoot>
      </MenuProvider>
    </ThemeProvider>
  );
}
