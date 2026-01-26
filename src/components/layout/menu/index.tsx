import {
  createTheme,
  Drawer,
  SwipeableDrawer,
  ThemeProvider,
} from "@mui/material";
import { global } from "../../../theme";
import { useEffect } from "react";
import { useMenu } from "./context";
import MenuContent from "./content";

const menuTheme = createTheme(global, {
  components: {
    MuiDrawer: {
      defaultProps: {
        ModalProps: {
          container: document.getElementById("container"),
          keepMounted: true,
        },
      },
      styleOverrides: {
        paper: {
          background: global.palette?.background?.blueGradient,
          border: "none",

          variants: [
            {
              props: { variant: "permanent" },
              style: {
                display: "none",
                position: "relative",
                minWidth: "250px",

                [global.breakpoints.up("lg")]: {
                  display: "block",
                  position: "relative",
                  borderRadius: global.shape.borderRadius,
                  maxWidth: 550,
                },
              },
            },
            {
              props: { variant: "temporary" },
              style: {
                display: "block",
                position: "absolute",
                width: "100%",

                [global.breakpoints.up("lg")]: {
                  display: "none",
                },
              },
            },
          ],
        },
      },
    },
    MuiSwipeableDrawer: {
      defaultProps: {
        anchor: "right",
      },
    },
  },
});

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

  return (
    <ThemeProvider theme={menuTheme}>
      <SwipeableDrawer
        open={visible}
        onClose={() => setVisible(false)}
        onOpen={() => setVisible(true)}
      >
        <MenuContent />
      </SwipeableDrawer>
      <Drawer variant="permanent">
        <MenuContent />
      </Drawer>
    </ThemeProvider>
  );
}
