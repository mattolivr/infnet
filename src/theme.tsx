import { createTheme, type Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadiusSm: number;
      borderRadius: number;
      borderRadiusLg: number;
    };
  }

  interface ThemeOptions {
    shape: {
      borderRadiusSm: number;
      borderRadius: number;
      borderRadiusLg: number;
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
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadiusSm: 12,
    borderRadius: 16,
    borderRadiusLg: 24,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "secondary",
        sx: {
          px: 3,
          py: 1.5,
          boxShadow: 0,
        },
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
                backgroundColor: theme.palette.grey[300],
                "&:hover": {
                  backgroundColor: theme.palette.grey[400],
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
  },
});
