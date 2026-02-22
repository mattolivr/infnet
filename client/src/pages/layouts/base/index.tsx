import { Outlet, useLocation } from "react-router";
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
import {
  HeaderProvider,
  useHeader,
} from "../../../components/layout/header/context";
import { useEffect } from "react";

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

  [theme.breakpoints.up("lg")]: {
    height: "100lvh",
    minHeight: "unset",
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
    overflow: "hidden",
    minHeight: 0,
  },
}));

function BaseLayoutContent() {
  const medium = useMediaQuery(global.breakpoints.up("md"));
  const location = useLocation();
  const { setPagename } = useHeader();

  useEffect(() => {
    setPagename(undefined);
  }, [location.pathname, setPagename]);

  return (
    <>
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
    </>
  );
}

export default function BaseLayout() {
  return (
    <ThemeProvider theme={global}>
      <CssBaseline />
      <HeaderProvider>
        <MenuProvider>
          <BaseLayoutContent />
        </MenuProvider>
      </HeaderProvider>
    </ThemeProvider>
  );
}
