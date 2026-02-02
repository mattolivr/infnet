import { createTheme } from "@mui/material";
import { global } from "../../global.theme";

const landing = createTheme(global, {
  components: {
    LandingPage: {
      styleOverrides: {
        title: {
          ...global.typography.h1,
          fontSize: "4rem",
          fontWeight: 200,
          textAlign: "center",

          [global.breakpoints.up("lg")]: {
            fontSize: "6rem",
          },
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
