/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface HeaderContextType {
  pagename?: string;
  setPagename: (name?: string) => void;
  setTitle: (title: string) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    pagename?: string;
    customTitle?: string;
  }>({});

  useEffect(() => {
    if (state.customTitle) {
      document.title = state.customTitle;
    } else if (state.pagename) {
      document.title = `Caderno - ${state.pagename}`;
    } else {
      document.title = "Caderno";
    }
  }, [state]);

  const setPagenameWithTitle = useCallback((name?: string) => {
    setState({ pagename: name, customTitle: undefined });
  }, []);

  const setTitleCustom = useCallback((title: string) => {
    setState({ pagename: undefined, customTitle: title });
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        pagename: state.pagename,
        setPagename: setPagenameWithTitle,
        setTitle: setTitleCustom,
      }}
    >
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
