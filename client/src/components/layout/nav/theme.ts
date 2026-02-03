import { createTheme } from "@mui/material";
import { global } from "../../../global.theme";

const nav = createTheme(global, {
  components: {
    Nav: {
      styleOverrides: {
        root: {
          width: "100%",
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",

          padding: global.spacing(1),
          zIndex: global.zIndex.nav,

          [global.breakpoints.up("md")]: {
            height: "100%",
            position: "static",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            padding: 0,
          },
        },
        dock: {
          backgroundColor: global.palette.background.paper,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",

          flexGrow: 1,
          padding: global.spacing(1.5),
          borderRadius: global.shape.borderRadius,
          gap: global.spacing(1),

          [global.breakpoints.up("md")]: {
            backgroundColor: "transparent",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            padding: 0,
          },
        },
        button: {
          "& a": {
            color: global.palette.text.primary,

            flexGrow: 1,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            gap: global.spacing(0.75),
            paddingBlock: global.spacing(1.5),
            paddingInline: global.spacing(3),
            borderRadius: global.shape.borderRadius,

            textDecoration: "none",
          },

          "&:not(&.Mui-selected) span:not(:first-of-type)": {
            display: "none",
          },

          "&.Mui-selected": {
            background: global.palette.background.blueGradient,
            transition: "background 0s",

            "&:hover": {
              background: global.palette.primary.light,
            },

            "& a": {
              color: global.palette.text.white,
            },
          },

          [global.breakpoints.up("md")]: {
            backgroundColor: global.palette.background.paper,

            "& a": {
              padding: global.spacing(1),
              display: "flex",
              flexDirection: "column-reverse",
            },

            "& span:not(:first-of-type)": {
              display: "inline",
              writingMode: "sideways-lr",
              textOrientation: "mixed",
              paddingTop: global.spacing(1),
            },
          },
        },
      },
    },
  },
});

export default nav;
