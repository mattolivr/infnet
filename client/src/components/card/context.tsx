import { createContext, useContext } from "react";
import type { CardProps } from ".";

export interface CardContextValue {
  cardProps?: CardProps;
}

export const CardContext = createContext<CardContextValue | undefined>(
  undefined,
);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a Card");
  }
  return context;
};
