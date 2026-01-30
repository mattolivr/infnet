import {
  Avatar,
  createTheme,
  Card as MuiCard,
  type CardProps as MuiCardProps,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { global } from "../../theme";
import { CardContext } from "./context";
import Icon from "../icon";

export interface CardProps extends MuiCardProps {
  title?: string;
  subtitle?: string;
  index?: number;
  icon?: string;
  selected?: boolean;
}

const Root = styled(MuiCard, {
  name: "Card",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",

  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,

  boxShadow: "none",
}));

const Body = styled("div", {
  name: "Card",
  slot: "body",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",

  gap: theme.spacing(2),
  paddingInline: theme.spacing(0.5),
}));

const cardTheme = createTheme(global, {
  components: {
    Card: {
      styleOverrides: {
        root: {
          backgroundColor: global.palette?.background?.paper,
          color: global.palette?.text?.primary,
        },
      },
    },
  },
});

export default function Card(props: CardProps) {
  const { title, subtitle, selected, index, icon, children, ...cardProps } =
    props;
  const headerProps = { title, subtitle, selected, index, icon };

  return (
    <CardContext.Provider value={{ cardProps: props }}>
      <ThemeProvider theme={cardTheme}>
        <Root {...cardProps}>
          {headerProps && <CardHeader {...headerProps} />}
          {children && <Body>{children}</Body>}
        </Root>
      </ThemeProvider>
    </CardContext.Provider>
  );
}

interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  index?: number;
  icon?: string;
  selected?: boolean;
}

const HeaderRoot = styled("div", {
  name: "CardHeader",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: theme.spacing(1),
}));

const HeaderTitleRoot = styled("div", {
  name: "CardHeader",
  slot: "title",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexGrow: 1,

  paddingInline: theme.spacing(0.5),
}));

export function CardHeader(props: CardHeaderProps) {
  const { title, subtitle, index, icon, selected } = props;

  return (
    <HeaderRoot>
      {icon && (
        <Avatar>
          <Icon name={icon} filled={selected} />
        </Avatar>
      )}

      {index !== undefined && <Avatar>{index}</Avatar>}

      {title && (
        <HeaderTitleRoot>
          <Typography variant="h3">{title}</Typography>
          {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        </HeaderTitleRoot>
      )}
    </HeaderRoot>
  );
}
