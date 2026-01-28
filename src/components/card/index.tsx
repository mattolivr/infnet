import {
  createTheme,
  Card as MuiCard,
  type CardProps as MuiCardProps,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CardHeader from "./header";
import { global } from "../../theme";
import { CardContext } from "./context";

export interface CardProps extends MuiCardProps {
  title?: string;
  floatingIcon?: React.ReactNode;
}

const CardRoot = styled(MuiCard, {
  name: "Card",
  slot: "root",
})(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: theme.spacing(1),
  position: "relative",

  boxShadow: "none",
}));

const CardBody = styled("div", {
  name: "Card",
  slot: "body",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: theme.spacing(1),
  position: "relative",

  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  letterSpacing: theme.typography.body1.letterSpacing,
  fontFamily: theme.typography.body1.fontFamily,
}));

const FloatingIcon = styled("div", {
  name: "Card",
  slot: "floatingIcon",
})(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(1),
  right: theme.spacing(2),

  "& span": {
    fontSize: 48,
    color: theme.palette.secondary.main,
  },
}));

const cardTheme = createTheme(global, {
  components: {
    Card: {
      styleOverrides: {
        root: {
          backgroundColor: global.palette?.background?.paper,
          color: global.palette?.text?.primary,
          border: `2px solid ${global.palette?.divider}`,

          variants: [
            {
              props: { color: "primary" },
              style: {
                backgroundColor: global.palette?.primary?.main,
                color: global.palette?.primary?.contrastText,
              },
            },
            {
              props: { color: "secondary" },
              style: {
                backgroundColor: global.palette.grey[100],
                color: global.palette?.text?.primary,
                border: "none",
              },
            },
          ],
        },
      },
    },
    CardHeader: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { color: "primary" },
              style: {
                color: global.palette?.primary?.contrastText,
              },
            },
          ],
        },
      },
    },
  },
});

export default function Card(props: CardProps) {
  const { floatingIcon, title, children, ...cardProps } = props;

  return (
    <CardContext.Provider value={{ cardProps: props }}>
      <ThemeProvider theme={cardTheme}>
        <CardRoot {...cardProps}>
          {title && <CardHeader title={title} />}
          <CardBody>{children}</CardBody>
          {floatingIcon && <FloatingIcon>{floatingIcon}</FloatingIcon>}
        </CardRoot>
      </ThemeProvider>
    </CardContext.Provider>
  );
}
