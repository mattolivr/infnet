import { createTheme } from "@mui/material";
import { global } from "../../global.theme";

export const about = createTheme(global, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        img: {
          borderRadius: global.shape.borderRadius,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: 500,
          paddingBlock: global.spacing(1),
        },
      },
    },
    AboutPage: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: global.spacing(2),
        },
        buttons: {
          display: "flex",
          gap: global.spacing(1),

          "& > .MuiButton-root": {
            borderRadius: global.shape.borderRadiusInner,

            "&:first-of-type": {
              background: "linear-gradient(to bottom right, #02B2F4, #0477b1)",

              "&:hover": {
                background: "#3b98c7",
              },
            },
          },
        },
      },
    },
  },
});
