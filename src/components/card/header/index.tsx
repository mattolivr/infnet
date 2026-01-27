import { styled, Typography } from "@mui/material";
import { useCardContext } from "../context";

interface CardHeaderProps {
  children?: React.ReactNode;
  title?: string;
  color?: string | undefined;
}

const CardHeaderRoot = styled("div", {
  name: "CardHeader",
  slot: "root",
})(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const CardHeaderTitle = styled(Typography, {
  name: "CardHeader",
  slot: "title",
})(() => ({}));

function CardHeader({ children, title }: CardHeaderProps) {
  const { cardProps } = useCardContext();

  return (
    <CardHeaderRoot color={cardProps?.color}>
      {title && <CardHeaderTitle variant="h3">{title}</CardHeaderTitle>}
      {!title && children}
    </CardHeaderRoot>
  );
}

CardHeader.Title = CardHeaderTitle;

export default CardHeader;
