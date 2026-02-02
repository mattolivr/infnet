import { styled } from "@mui/material";
import { Outlet } from "react-router";

const Root = styled("section", {
  name: "FullLayout",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",

  flexGrow: 1,
  marginBottom: 88, // Bottom nav

  gap: theme.spacing(3),
  paddingInline: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
    paddingInline: theme.spacing(0),
  },

  [theme.breakpoints.up("lg")]: {
    marginBottom: 0,
  },
}));

export default function FullLayout() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}
