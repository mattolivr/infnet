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
  height: "100lvh",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    background: theme.palette.background.lightBlueGradient,
    padding: theme.spacing(2),
  },
}));

const MainLayoutContainer = styled("div", {
  name: "MainLayout",
  slot: "container",
})(({ theme }) => ({
  background: theme.palette.background.default,

  flexGrow: 1,
  minHeight: 0,
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
  },
}));

const MainLayoutMain = styled("main", {
  name: "MainLayout",
  slot: "main",
})(({ theme }) => ({
  flexGrow: 1,
  minHeight: 0,
  overflowY: "auto",

  [theme.breakpoints.only("xs")]: {
    padding: theme.spacing(1),
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
