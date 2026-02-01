import { createTheme } from "@mui/material";
import { global } from "../../../global.theme";

const header = createTheme(global, {
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          background: "transparent",
          color: global.palette?.secondary?.contrastText,
          boxShadow: "none",

          paddingInline: global.spacing(2),
          paddingBlock: global.spacing(1.5),

          [global.breakpoints.up("md")]: {
            padding: 0,
          },
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          gap: global.spacing(2),

          [global.breakpoints.up("md")]: {
            minHeight: "40px",
            flexDirection: "row",
            justifyContent: "flex-end",
          },
        },
      },
    },
    Header: {
      styleOverrides: {
        root: {
          zIndex: global.zIndex.header,
        },
        logoIcon: {
          backgroundColor: "transparent",
          padding: 0,
          width: 42,
          height: 42,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          zIndex: global.zIndex.header + 1,
          cursor: "default",

          "& span": {
            fontSize: 32,
            fontVariationSettings: `"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 32`,
          },
        },
        logoText: {
          [global.breakpoints.up("md")]: {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          },
        },
        pageName: {
          flexGrow: 1,
          textAlign: "center",
          color: global.palette.text.primary,
        },
      },
    },
  },
});

export { header };
