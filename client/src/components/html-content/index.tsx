import { styled } from "@mui/material";
import DOMPurify from "dompurify";

interface HTMLContentProps {
  html: string;
  className?: string;
}

const ContentWrapper = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize,
  lineHeight: 1.6,

  "& p": {
    margin: theme.spacing(1, 0),
    lineHeight: 1.6,

    "&:first-of-type": {
      marginTop: 0,
    },
    "&:last-of-type": {
      marginBottom: 0,
    },
  },

  "& ul, & ol": {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: 0,
  },

  "& li": {
    marginBottom: theme.spacing(0.75),
    lineHeight: 1.6,
  },

  "& strong, & b": {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },

  "& em, & i": {
    fontStyle: "italic",
  },

  "& a": {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.2s",

    "&:hover": {
      color: theme.palette.secondary.dark,
      textDecoration: "underline",
    },
  },

  "& code": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05)",
    color: theme.palette.secondary.main,
    padding: theme.spacing(0.25, 0.75),
    borderRadius: theme.shape.borderRadiusSm / 2,
    fontFamily: "'Fira Code', 'Courier New', monospace",
    fontSize: "0.875em",
    fontWeight: 500,
  },

  "& pre": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.03)",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadiusSm,
    overflow: "auto",
    border: `1px solid ${theme.palette.divider}`,

    "& code": {
      backgroundColor: "transparent",
      padding: 0,
      fontSize: "0.875rem",
    },
  },

  "& blockquote": {
    borderLeft: `4px solid ${theme.palette.secondary.main}`,
    paddingLeft: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
    fontStyle: "italic",
    color: theme.palette.text.secondary,
  },

  "& hr": {
    border: "none",
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(2, 0),
  },
}));

export default function HTMLContent({ html, className }: HTMLContentProps) {
  const sanitizedHTML = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "ul",
      "ol",
      "li",
      "a",
      "code",
      "pre",
      "blockquote",
      "hr",
      "span",
      "div",
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class"],
  });

  return (
    <ContentWrapper
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}
