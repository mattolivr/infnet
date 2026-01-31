import { createContext, useContext, useState, type ReactNode } from "react";

interface MenuContextType {
  visible: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <MenuContext.Provider value={{ visible, toggleMenu }}>
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
