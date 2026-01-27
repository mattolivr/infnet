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
          variants: [
            {
              props: { color: "primary" },
              style: {
                backgroundColor: global.palette?.primary?.main,
                color: global.palette?.primary?.contrastText,
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
  return (
    <CardContext.Provider value={{ cardProps: props }}>
      <ThemeProvider theme={cardTheme}>
        <CardRoot {...props}>
          {props.title && <CardHeader title={props.title} />}

          {typeof props.children === "string" ? (
            <Typography>{props.children}</Typography>
          ) : (
            props.children
          )}

          {props.floatingIcon && (
            <FloatingIcon>{props.floatingIcon}</FloatingIcon>
          )}
        </CardRoot>
      </ThemeProvider>
    </CardContext.Provider>
  );
}
