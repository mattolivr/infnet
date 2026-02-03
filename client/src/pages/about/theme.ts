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
          fontFamily: global.typography.h1.fontFamily,
          fontSize: "1.5rem",
          fontWeight: 500,
          letterSpacing: "0.03em",
          paddingBlock: global.spacing(1),
          marginBottom: global.spacing(1),

          [global.breakpoints.up("sm")]: {
            fontSize: "1.7rem",
            textAlign: "left",
            marginLeft: global.spacing(2),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: global.palette.background.paper,
          borderRadius: global.shape.borderRadiusInner,
          fontWeight: 600,
          fontSize: "0.9rem",
          paddingBlock: global.spacing(2),
          paddingLeft: global.spacing(2),
          paddingRight: global.spacing(1),
          color: global.palette.primary.dark,
        },
      },
    },
    Card: {
      styleOverrides: {
        root: {
          [global.breakpoints.up("sm")]: {
            background: "transparent",
            paddingBottom: 0,
          },
        },
      },
    },
    CardHeader: {
      styleOverrides: {
        title: {
          [global.breakpoints.up("sm")]: {
            fontFamily: global.typography.h1.fontFamily,
            letterSpacing: "0.03em",
            fontSize: "1.2rem",
          },
        },
      },
    },
    AboutPage: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: global.spacing(4),
          maxWidth: "1050px",
          alignSelf: "center",

          [global.breakpoints.up("sm")]: {
            gap: global.spacing(6),
          },
        },
        aboutProject: {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: global.spacing(1),
        },
        technologies: {
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: global.spacing(1),
          paddingInline: global.spacing(2),
          paddingBlock: global.spacing(1),

          [global.breakpoints.up("sm")]: {
            justifyContent: "flex-start",
          },
        },
        aboutMe: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: global.spacing(1),

          "& > img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",

            [global.breakpoints.up("sm")]: {
              width: "250px",
              height: "250px",
              flexShrink: 0,
              borderRadius: 70,
            },
          },

          [global.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",
            paddingInline: global.spacing(2),
            gap: global.spacing(2),
          },
        },
        buttons: {
          display: "flex",
          gap: global.spacing(1),

          "& > .MuiButton-root": {
            borderRadius: global.shape.borderRadiusInner,

            "&:first-of-type": {
              background: "linear-gradient(to bottom right, #0a66c2, #2b72d0)",

              "&:hover": {
                background: "#4688df",
              },
            },
          },
        },
      },
    },
  },
});
