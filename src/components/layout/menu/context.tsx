import { createContext, useContext, useState, type ReactNode } from "react";

interface MenuContextType {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <MenuContext.Provider value={{ visible, setVisible }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de MenuProvider");
  }
  return context;
}

export function toggleMenu() {
  const event = new CustomEvent("toggle-menu");
  window.dispatchEvent(event);
}
