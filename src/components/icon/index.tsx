import { styled } from "@mui/material";

interface IconProps {
  name?: string;
  filled?: boolean;
}

const IconRoot = styled("span", {
  name: "Icon",
  slot: "root",
})(() => ({}));

export default function Icon({ name, filled }: IconProps) {
  if (!name) return <></>;

  return (
    <IconRoot className={`material-symbols-rounded${filled ? " filled" : ""}`}>
      {name}
    </IconRoot>
  );
}
