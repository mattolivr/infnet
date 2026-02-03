import { styled } from "@mui/material";
import cadernoSvg from "../../assets/caderno.svg";
import githubSvg from "../../assets/github.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import javascriptSvg from "../../assets/javascript.svg";
import typescriptSvg from "../../assets/typescript.svg";
import reactSvg from "../../assets/react.svg";
import muiSvg from "../../assets/mui.svg";

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

const svgMap: Record<string, string> = {
  caderno: cadernoSvg,
  github: githubSvg,
  linkedin: linkedinSvg,
  html: htmlSvg,
  css: cssSvg,
  javascript: javascriptSvg,
  typescript: typescriptSvg,
  react: reactSvg,
  mui: muiSvg,
};

export default function Icon({ name, filled, style }: IconProps) {
  if (!name) return <></>;

  const svgPath = svgMap[name];

  if (svgPath) {
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
