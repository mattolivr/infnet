import { createTheme } from "@mui/material";
import { global } from "../../../global.theme";

const menu = createTheme(global, {
  components: {
    MuiDrawer: {
      defaultProps: {
        ModalProps: {
          keepMounted: true,
        },
      },
      styleOverrides: {
        paper: {
          background: global.palette?.background?.lightBlueGradient,
          border: "none",
          padding: global.spacing(0),

          [global.breakpoints.up("lg")]: {
            background: "transparent",
            overflowY: "auto",
            maxHeight: "100%",
          },

          variants: [
            {
              props: { variant: "permanent" },
              style: {
                display: "none",
                position: "relative",
                maxWidth: "320px",

                [global.breakpoints.up("lg")]: {
                  display: "block",
                  position: "relative",
                },
              },
            },
            {
              props: { variant: "temporary" },
              style: {
                position: "absolute",
                width: "100%",
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

const content = createTheme(global, {
  components: {
    MenuContent: {
      styleOverrides: {
        root: {
          paddingInline: global.spacing(1),
          paddingBlock: 88, // Header and Bottom Nav height
          overflowY: "auto",
          height: "100%",

          [global.breakpoints.up("sm")]: {
            paddingInline: global.spacing(2),
          },

          [global.breakpoints.up("md")]: {
            paddingTop: 72, // Header height
            paddingBottom: global.spacing(2),
            paddingLeft: 72, // Nav width
          },

          [global.breakpoints.up("lg")]: {
            padding: global.spacing(0),
            overflow: "visible",
            height: "auto",
          },
        },
        group: {
          "&:first-of-type > li:first-of-type": {
            paddingTop: 0,
          },

          display: "flex",
          flexDirection: "column",
        },
        subheader: {
          backgroundColor: "transparent",
          color: global.palette.text.primary,
          paddingBlock: global.spacing(2),
          paddingInline: global.spacing(1),

          ...global.typography.h3,

          [global.breakpoints.up("lg")]: {
            paddingInline: global.spacing(1),

            ...global.typography.small,

            fontWeight: 400,
          },
        },
        item: {
          padding: 0,

          "& a": {
            textDecoration: "none",
            width: "100%",

            padding: global.spacing(2),
          },

          [global.breakpoints.down("sm")]: {
            "&.Mui-selected": {
              backgroundColor: "transparent",
            },
          },

          [global.breakpoints.up("sm")]: {
            backgroundColor: global.palette.background.paper,
            borderRadius: global.shape.borderRadius,

            alignItems: "start",
          },

          [global.breakpoints.up("lg")]: {
            backgroundColor: "transparent",

            "&.Mui-selected": {
              backgroundColor: "transparent",

              "& a *": {
                color: global.palette.primary.main,
              },
            },

            "& a": {
              paddingBlock: global.spacing(1.5),
              paddingInline: global.spacing(1.5),
            },
          },
        },
      },
    },
    Card: {
      styleOverrides: {
        root: {
          padding: 0,

          [global.breakpoints.up("sm")]: {
            backgroundColor: "transparent",
            borderRadius: 0,
          },
        },
        body: {
          gap: 0,

          [global.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: global.spacing(2),
          },

          [global.breakpoints.up("lg")]: {
            display: "flex",
            flexDirection: "column",
            gap: global.spacing(0),
          },
        },
      },
    },
    CardHeader: {
      styleOverrides: {
        root: {
          [global.breakpoints.up("sm")]: {
            flexDirection: "column",
            alignItems: "flex-start",
          },

          [global.breakpoints.up("lg")]: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: global.spacing(1),
          },
        },
        avatar: {
          backgroundColor: global.palette.background.lightGray,
          color: global.palette.text.tertiary,

          [global.breakpoints.up("lg")]: {
            backgroundColor: "transparent",
            color: global.palette.text.primary,

            width: "auto",
            height: "auto",

            padding: 0,
            borderRadius: 0,

            "& span": {
              fontSize: "1rem",
            },
          },

          variants: [
            {
              props: { color: "primary" },
              style: {
                backgroundColor: global.palette.secondary.main,
                color: global.palette.secondary.contrastText,
              },
            },
          ],
        },
        titleContainer: {
          [global.breakpoints.up("lg")]: {
            paddingInline: 0,
          },
        },
        title: {
          [global.breakpoints.up("lg")]: {
            ...global.typography.small,
            lineHeight: 1.4,
          },
        },
        subtitle: {
          [global.breakpoints.up("lg")]: {
            display: "none",
          },
        },
      },
    },
  },
});

export { menu, content };
