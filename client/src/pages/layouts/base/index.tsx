import { Outlet } from "react-router";
import Header, { LogoIcon } from "../../../components/layout/header";
import Menu from "../../../components/layout/menu";
import { MenuProvider } from "../../../components/layout/menu/context";
import { styled, ThemeProvider, useMediaQuery } from "@mui/material";
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

const Section = styled("section", {
  name: "Base Layout",
  slot: "section",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(1),
  position: "relative",
  overflowY: "auto",

  paddingInline: theme.spacing(1),
  flexGrow: 1,

  [theme.breakpoints.up("sm")]: {
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),
  },

  [theme.breakpoints.up("md")]: {
    padding: 0,
  },

  [theme.breakpoints.up("lg")]: {
    flex: "1 1 0",
    minHeight: 0,
    maxHeight: "100%",

    "& > *": {
      flexShrink: 0,
    },
  },
}));

export default function BaseLayout() {
  const medium = useMediaQuery(global.breakpoints.up("md"));

  return (
    <ThemeProvider theme={global}>
      <MenuProvider>
        <LayoutRoot>
          {medium && (
            <ThemeProvider theme={header}>
              <LogoIcon />
            </ThemeProvider>
          )}
          <Header />
          {medium && <Nav />}
          <Main>
            <Menu />
            <Section>
              <Outlet />
            </Section>
          </Main>
          {!medium && <Nav />}
        </LayoutRoot>
      </MenuProvider>
    </ThemeProvider>
  );
}
