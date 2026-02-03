import { createTheme } from "@mui/material";
import { global } from "../../global.theme";

const error = createTheme(global, {
  components: {
    ErrorPage: {
      styleOverrides: {
        title: {
          ...global.typography.h1,
          fontSize: "6rem",
          fontWeight: 200,
          textAlign: "center",
        },
        subtitle: {
          ...global.typography.h2,
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

export { error };
