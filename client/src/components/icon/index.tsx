import { styled } from "@mui/material";

interface IconProps {
  name?: string;
  filled?: boolean;
  style?: React.CSSProperties;
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
  color: "inherit",
}));

const svgIcons = ["github"];

export default function Icon({ name, filled, style }: IconProps) {
  if (!name) return <></>;

  const isSvgIcon = svgIcons.includes(name);
  const svgPath = `/src/assets/icons/${name}.svg`;

  if (isSvgIcon) {
    return (
      <IconSvg
        style={{
          WebkitMaskImage: `url("${svgPath}")`,
          maskImage: `url("${svgPath}")`,
          ...style,
        }}
      ></IconSvg>
    );
  }

  return (
    <IconMaterial
      className={`material-symbols-rounded${filled ? " filled" : ""}`}
      style={style}
    >
      {name}
    </IconMaterial>
  );
}
