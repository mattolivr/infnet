import {
  Avatar,
  Card as MuiCard,
  type CardProps as MuiCardProps,
  styled,
  Typography,
} from "@mui/material";
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

  backgroundColor: theme.palette.background.paper,

  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,

  boxShadow: "none",
}));

const Body = styled("div", {
  name: "Card",
  slot: "body",
  shouldForwardProp: (prop) => prop !== "hasHeader",
})<{ hasHeader?: boolean }>(({ theme, hasHeader }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",

  gap: theme.spacing(2),
  paddingInline: hasHeader ? theme.spacing(0.5) : 0,
}));

export default function Card(props: CardProps) {
  const { title, subtitle, selected, index, icon, children, ...cardProps } =
    props;
  const headerProps = { title, subtitle, selected, index, icon };
  const hasHeader = Boolean(title || subtitle || index !== undefined || icon);

  return (
    <CardContext.Provider value={{ cardProps: props }}>
      <Root {...cardProps}>
        {hasHeader && <CardHeader {...headerProps} />}
        {children && <Body hasHeader={hasHeader}>{children}</Body>}
      </Root>
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

  gap: theme.spacing(1.5),
}));

const HeaderAvatar = styled(Avatar, {
  name: "CardHeader",
  slot: "avatar",
})();

const HeaderTitleContainer = styled("div", {
  name: "CardHeader",
  slot: "titleContainer",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexGrow: 1,

  paddingInline: theme.spacing(0.5),
}));

const HeaderTitle = styled(Typography, {
  name: "CardHeader",
  slot: "title",
})();

const HeaderSubtitle = styled(Typography, {
  name: "CardHeader",
  slot: "subtitle",
})();

export function CardHeader(props: CardHeaderProps) {
  const { title, subtitle, index, icon, selected } = props;

  return (
    <HeaderRoot>
      {icon && (
        <HeaderAvatar>
          <Icon name={icon} filled={selected} />
        </HeaderAvatar>
      )}

      {index !== undefined && <HeaderAvatar>{index}</HeaderAvatar>}

      {title && (
        <HeaderTitleContainer>
          <HeaderTitle variant="h3">{title}</HeaderTitle>
          {subtitle && (
            <HeaderSubtitle variant="subtitle1">{subtitle}</HeaderSubtitle>
          )}
        </HeaderTitleContainer>
      )}
    </HeaderRoot>
  );
}
