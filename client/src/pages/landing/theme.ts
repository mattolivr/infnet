import { createTheme } from "@mui/material";
import { global } from "../../global.theme";

const landing = createTheme(global, {
  components: {
    LandingPage: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          flexGrow: 1,
          gap: global.spacing(3),
          paddingInline: global.spacing(1),

          marginBottom: 88,

          [global.breakpoints.up("md")]: {
            gap: global.spacing(4),
            paddingInline: global.spacing(0),
          },

          [global.breakpoints.up("lg")]: {
            marginBottom: 0,
          },
        },
        title: {
          ...global.typography.h1,
          fontSize: "6rem",
          fontWeight: 200,
        },
        description: {
          maxWidth: "600px",
          textAlign: "center",
        },
        buttons: {
          display: "flex",
          gap: global.spacing(2),
        },
      },
    },
  },
});

export default landing;
