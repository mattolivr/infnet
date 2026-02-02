import { createTheme } from "@mui/material";
import { global } from "../../global.theme";

const landing = createTheme(global, {
  components: {
    LandingPage: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
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
          fontSize: "4rem",
          fontWeight: 200,
          textAlign: "center",
        },
        description: {
          maxWidth: "600px",
          textAlign: "center",
          alignSelf: "center",
        },
        buttons: {
          display: "flex",
          flexDirection: "column",
          gap: global.spacing(1),

          [global.breakpoints.up("sm")]: {
            flexDirection: "row",
            justifyContent: "center",
            gap: global.spacing(2),
          },
        },
      },
    },
  },
});

export default landing;
