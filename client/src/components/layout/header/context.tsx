import { createContext, useContext, useState } from "react";

interface HeaderContextType {
  pagename?: string;
  setPagename: (name?: string) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [pagename, setPagename] = useState<string | undefined>();

  return (
    <HeaderContext.Provider value={{ pagename, setPagename }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader deve ser usado dentro de HeaderProvider");
  }
  return context;
}
