import { createTheme, SwipeableDrawer, ThemeProvider } from "@mui/material";
import { global } from "../../../theme";
import { useEffect } from "react";
import { useMenu } from "./context";
import MenuContent from "./content";

export default function Menu() {
  const { visible, setVisible } = useMenu();

  useEffect(() => {
    const handleToggleMenu = () => {
      setVisible(!visible);
    };

    window.addEventListener("toggle-menu", handleToggleMenu);

    return () => {
      window.removeEventListener("toggle-menu", handleToggleMenu);
    };
  }, [setVisible, visible]);

  const menuTheme = createTheme(global, {
    components: {
      MuiSwipeableDrawer: {
        defaultProps: {
          slotProps: {
            paper: {
              sx: {
                width: "100%",
                background:
                  "linear-gradient(to bottom right, #0575E6, #5433FF)",
                position: "absolute",
                display: visible ? "block" : "none",
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={menuTheme}>
      <SwipeableDrawer
        anchor="right"
        open={visible}
        onClose={() => setVisible(false)}
        onOpen={() => setVisible(true)}
        ModalProps={{
          container: document.getElementById("container"),
          style: { position: "absolute" },
          keepMounted: true,
        }}
      >
        <MenuContent />
      </SwipeableDrawer>
    </ThemeProvider>
  );
}
