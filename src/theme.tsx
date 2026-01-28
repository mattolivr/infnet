import { createTheme, type Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadiusSm: number;
      borderRadius: number;
      borderRadiusLg: number;
      borderRadiusXl: number;
    };
  }

  interface ThemeOptions {
    shape: {
      borderRadiusSm: number;
      borderRadius: number;
      borderRadiusLg: number;
      borderRadiusXl: number;
    };
  }

  interface TypeBackground {
    blueGradient?: string;
    lightBlueGradient?: string;
  }
}

export const global: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b1d8ff",
      contrastText: "#00478F",
    },
    secondary: {
      main: "#5C98F2",
      contrastText: "#efefef",
    },
    tonalOffset: {
      light: 0.2,
      dark: 0.1,
    },
    text: {
      primary: "#383838",
      secondary: "#565656",
      disabled: "#b2b2b2",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
      blueGradient: "linear-gradient(to bottom right, #0575E6, #5433FF)",
      lightBlueGradient: "linear-gradient(to bottom right, #d7ebff, #91b4e6)",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 16,
    h1: {
      fontFamily: "Lexend",
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadiusSm: 12,
    borderRadius: 16,
    borderRadiusLg: 24,
    borderRadiusXl: 32,
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          paddingInline: theme.spacing(3),
          paddingBlock: theme.spacing(1.5),

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
            {
              props: { color: "default" },
              style: {
                color: theme.palette.secondary.contrastText,
              },
            },
          ],
        }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

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
            {
              props: { color: "default" },
              style: {
                color: theme.palette.secondary.contrastText,
              },
            },
          ],
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "&:not(:has(.material-symbols-rounded))": {
            fontFamily: "Lexend",
            fontWeight: 600,
            fontSize: 18,
          },

          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.grey[200],

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
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
              },
            },
          ],
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
