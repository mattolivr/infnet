import { Outlet } from "react-router";
import Header from "../../../components/layout/header";
import Menu from "../../../components/layout/menu";
import { MenuProvider } from "../../../components/layout/menu/context";
import { styled } from "@mui/material";

const MainLayoutRoot = styled("div", {
  name: "MainLayout",
  slot: "root",
})(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  minHeight: "100lvh",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  [theme.breakpoints.up("sm")]: {
    background: theme.palette.background.lightBlueGradient,
    padding: theme.spacing(2),
  },

  [theme.breakpoints.up("lg")]: {
    height: "100lvh",
    minHeight: "auto",
    overflow: "hidden",
  },
}));

const MainLayoutContainer = styled("div", {
  name: "MainLayout",
  slot: "container",
})(({ theme }) => ({
  background: theme.palette.background.default,
  flexGrow: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadiusLg,
  },

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    gap: theme.spacing(1),
    minHeight: 0,
  },
}));

const MainLayoutMain = styled("main", {
  name: "MainLayout",
  slot: "main",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(1),

  [theme.breakpoints.only("xs")]: {
    padding: theme.spacing(1),
  },

  [theme.breakpoints.up("lg")]: {
    flex: "1 1 0",
    minHeight: 0,
    maxHeight: "100%",
    overflowY: "scroll",
    padding: theme.spacing(1),

    "& > *": {
      flexShrink: 0,
    },
  },
}));

export default function MainLayout() {
  return (
    <MenuProvider>
      <MainLayoutRoot className="app">
        <MainLayoutContainer id="container">
          <Header sticky />
          <Menu />
          <MainLayoutMain>
            <Outlet />
          </MainLayoutMain>
        </MainLayoutContainer>
      </MainLayoutRoot>
    </MenuProvider>
  );
}
