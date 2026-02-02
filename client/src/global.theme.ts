import { createTheme, type Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadius: number;
      borderRadiusInner: number;
      borderRadiusOuter: number;
    };
    zIndex: {
      header: number;
      nav: number;
    };
  }

  interface ThemeOptions {
    shape: {
      borderRadius: number;
      borderRadiusInner: number;
      borderRadiusOuter: number;
    };
    zIndex: {
      header: number;
      nav: number;
    };
  }

  interface TypographyVariants {
    small: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    small?: React.CSSProperties;
  }

  interface TypeText {
    tertiary: string;
    white: string;
  }

  interface TypeBackground {
    lightGray?: string;
    blueGradient?: string;
    blackGradient?: string;
    lightBlueGradient?: string;
  }
}

export const global: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2F52F3",
    },
    secondary: {
      main: "#91b4e6",
      contrastText: "rgb(6, 43, 92)",
    },
    text: {
      primary: "#0B0B0B",
      secondary: "#383838",
      tertiary: "#565656",
      disabled: "#b2b2b2",
      white: "#FFFFFF",
    },
    background: {
      default: "#f5f5f5",
      paper: "#f6f6f6a6",
      lightGray: "#E5E5E5",
      blueGradient: "linear-gradient(to bottom right, #0575E6, #5433FF)",
      blackGradient: "linear-gradient(to bottom right, #2e2e2e, #0B0B0B)",
      lightBlueGradient: "linear-gradient(to bottom right, #d7ebff, #91b4e6)",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 14,

    h1: {
      fontFamily: "Lexend",
      fontWeight: 300,
      fontSize: "1.5rem",
      letterSpacing: "0.01em",
    },
    h2: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
      lineHeight: 1,
    },
    body1: {
      lineHeight: 1.7,
    },
    subtitle1: {
      fontSize: "0.75rem",
      lineHeight: 1.2,
      fontWeight: 600,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    small: {
      fontSize: "0.825rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  shape: {
    borderRadius: 24,
    borderRadiusInner: 16,
    borderRadiusOuter: 32,
  },
  zIndex: {
    header: 1900,
    nav: 2000,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        a: {
          color: theme.palette.text.primary,
          textDecoration: "none",
          fontWeight: 600,
        },
      }),
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          variants: [
            {
              props: { variant: "h1" },
              style: {
                color: theme.palette.text.primary,
                flexGrow: 1,
                textAlign: "center",

                [theme.breakpoints.up("sm")]: {
                  fontSize: "2rem",
                },
              },
            },
            {
              props: (props) =>
                ["h1", "h2", "h3"].includes(props.variant || ""),
              style: {
                color: theme.palette.text.primary,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            },
            {
              props: { variant: "subtitle1" },
              style: {
                color: theme.palette?.text?.secondary,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            },
          ],
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          transition: "background 0s",

          "&:not(:has(a)), &:has(a) > a": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            gap: theme.spacing(1),
            paddingInline: theme.spacing(4),
            paddingBlock: theme.spacing(2),
          },

          "&:has(a)": {
            padding: 0,
          },

          "& > a": {
            textDecoration: "none",
            color: "inherit",
            width: "100%",
            height: "100%",
          },

          [theme.breakpoints.down("sm")]: {
            flexGrow: 1,
          },

          [theme.breakpoints.up("md")]: {
            borderRadius: global.shape.borderRadiusInner,
          },

          variants: [
            {
              props: { color: "primary" },
              style: {
                background: theme.palette.background.blueGradient,
                "&:hover": {
                  background: theme.palette.primary.light,
                },
                "&, & div": {
                  color: theme.palette.text.white,
                },
              },
            },
            {
              props: { color: "secondary" },
              style: {
                backgroundColor: theme.palette.grey[900],
                background: theme.palette.background.blackGradient,
                "&:hover": {
                  background: theme.palette.grey[800],
                },
                "&, & div": {
                  color: theme.palette.text.white,
                },
              },
            },
            {
              props: { size: "small" },
              style: {
                ...theme.typography.button,

                "&:not(:has(a)), &:has(a) > a": {
                  [theme.breakpoints.up("md")]: {
                    padding: theme.spacing(1.5, 3),
                  },
                },
              },
            },
          ],
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(1),

          background: theme.palette.background.paper,

          "&, & div": {
            color: theme.palette.text.primary,
          },

          variants: [
            {
              props: { color: "primary" },
              style: {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              },
            },
            {
              props: { color: "secondary" },
              style: {
                color: theme.palette.text.secondary,
                backgroundColor: theme.palette.grey[200],
                "&:hover": {
                  backgroundColor: theme.palette.grey[300],
                },
              },
            },
          ],
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(1),
          borderRadius: 12,

          "&:not(:has(.material-symbols-rounded))": {
            fontFamily: "Lexend",
            fontWeight: 600,
            fontSize: 18,
          },

          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.light,
        }),
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "0.75rem",
          fontWeight: 600,
          width: "fit-content",

          variants: [
            {
              props: { color: "primary" },
              style: {
                color: theme.palette?.primary?.contrastText,
                backgroundColor: theme.palette?.primary?.main,
              },
            },
            {
              props: { color: "secondary" },
              style: {
                color: theme.palette?.secondary?.contrastText,
                backgroundColor: theme.palette?.secondary?.main,
              },
            },
          ],
        }),
      },
    },
  },
});
