import {
  createTheme,
  Card as MuiCard,
  type CardProps as MuiCardProps,
  styled,
  ThemeProvider,
} from "@mui/material";
import CardHeader from "./header";
import { global } from "../../theme";
import { CardContext } from "./context";

export interface CardProps extends MuiCardProps {
  title?: string;
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

  boxShadow: "none",
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
          {props.title && <CardHeader title={props.title} />}{" "}
          {props.children}{" "}
        </CardRoot>
      </ThemeProvider>
    </CardContext.Provider>
  );
}
