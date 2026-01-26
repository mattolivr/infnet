import { styled } from "@mui/material";

const CardRoot = styled("div", {
  name: "Card",
  slot: "root",
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export default function Card() {
  return <CardRoot>Card Component</CardRoot>;
}
