import { styled } from "@mui/material";

interface IconProps {
  name?: string;
  filled?: boolean;
}

const IconMaterial = styled("span", {
  name: "Icon",
  slot: "root",
})(() => ({
  fontVariationSettings: `"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24`,

  "&.filled": {
    fontVariationSettings: `"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24`,
  },
}));

const IconSvg = styled("div", {
  name: "Icon",
  slot: "svg",
})(() => ({
  width: "24px",
  height: "24px",
  backgroundColor: "currentColor",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
}));

const externalIcons = ["github"];

export default function Icon({ name, filled }: IconProps) {
  if (!name) return <></>;
  const isExternalIcon = externalIcons.includes(name);
  const externalIconPath = `/src/assets/icons/${name}.svg`;

  if (isExternalIcon) {
    return (
      <IconSvg
        style={{
          WebkitMaskImage: `url("${externalIconPath}")`,
          maskImage: `url("${externalIconPath}")`,
        }}
      ></IconSvg>
    );
  }

  return (
    <IconMaterial
      className={`material-symbols-rounded${filled ? " filled" : ""}`}
    >
      {name}
    </IconMaterial>
  );
}
