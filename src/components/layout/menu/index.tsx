import {
  createTheme,
  Divider,
  SwipeableDrawer,
  ThemeProvider,
} from "@mui/material";
import { global } from "../../../theme";
import { useEffect } from "react";
import { useMenu } from "./context";
import Header from "../header";

const headerTheme = createTheme(global, {
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          background: "none",
          paddingInline: {
            sm: 3,
          },
          paddingTop: {
            sm: 2,
          },
        },
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
      MuiDivider: {
        defaultProps: {
          sx: {
            borderColor: "#b1d8ff6b",
            marginInline: 2.5,
            marginBlock: 0.5,
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
        }}
      >
        <Header theme={headerTheme} />
        <Divider />
      </SwipeableDrawer>
    </ThemeProvider>
  );
}
