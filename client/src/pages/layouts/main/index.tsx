import { styled } from "@mui/material";
import { Outlet } from "react-router";
import Menu from "../../../components/layout/menu";

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

export default function MainLayout() {
  return (
    <>
      <Menu />
      <Section>
        <Outlet />
      </Section>
    </>
  );
}
