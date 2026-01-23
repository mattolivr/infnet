import { createTheme, type ThemeOptions } from "@mui/material/styles";

export const global: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0082ea",
      light: "#b1d8ff",
      dark: "#113496",
      contrastText: "#efefef",
    },
    secondary: {
      main: "#b1d8ff",
      dark: "#81c0fb",
      light: "#dff0ff",
      contrastText: "#00478F",
    },
    text: {
      primary: "#383838",
      secondary: "#565656",
      disabled: "#b2b2b2",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 14,
    h1: {
      fontFamily: "Lexend",
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
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
        sx: {
          width: 42,
          height: 42,
          color: "secondary.contrastText",
          backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "secondary.dark",
          },
        }
      },
    },
  },
});
