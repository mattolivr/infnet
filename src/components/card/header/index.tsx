import { styled, Typography } from "@mui/material";
import { useCardContext } from "../context";
import type { TypographyVariant } from "@mui/material/styles";

interface CardHeaderProps {
  children?: React.ReactNode;
  title?: string;
  titleVariant?: TypographyVariant;
  color?: string | undefined;
}

const CardHeaderRoot = styled("div", {
  name: "CardHeader",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(1),
  flexGrow: 1,
}));

const CardHeaderTitle = styled(Typography, {
  name: "CardHeader",
  slot: "title",
})(() => ({
  flexGrow: 1,
}));

function CardHeader({ children, title, titleVariant }: CardHeaderProps) {
  const { cardProps } = useCardContext();

  return (
    <CardHeaderRoot color={cardProps?.color}>
      {title && (
        <CardHeaderTitle variant={titleVariant || "h3"}>
          {title}
        </CardHeaderTitle>
      )}
      {!title && children}
    </CardHeaderRoot>
  );
}

CardHeader.Title = CardHeaderTitle;

export default CardHeader;
