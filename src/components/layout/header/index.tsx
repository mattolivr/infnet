import { Close, Dehaze } from "@mui/icons-material";
import {
  AppBar,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { global } from "../../../theme";
import { toggleMenu, useMenu } from "../menu/context";
import type { Theme } from "@mui/material/styles";

interface HeaderProps {
  theme?: Theme;
}

const defaultHeaderTheme = createTheme(global, {
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        sx: {
          background: "linear-gradient(to bottom right, #0575E6, #5433FF)",
          display: {
            xs: "block",
            lg: "none",
          },
          px: {
            xs: 4,
            sm: 3,
          },
          py: {
            xs: 1.5,
            sm: 1,
          },
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          borderTopLeftRadius: {
            xs: 0,
            sm: 24,
          },
          borderTopRightRadius: {
            xs: 0,
            sm: 24,
          },
          fontFamily: "Lexend",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "h5",
        component: "h1",
        sx: {
          flexGrow: "1",
          fontFamily: "Lexend",
          fontWeight: 500,
        },
      },
    },
  },
});

export default function Header({ theme }: HeaderProps = {}) {
  const { visible } = useMenu();

  const headerTheme = createTheme(defaultHeaderTheme, theme || {});

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Typography>Caderno</Typography>
          <IconButton
            onClick={() => toggleMenu()}
            sx={{
              color: "secondary.main",
              backgroundColor: "none",
              "&:hover": {
                backgroundColor: "none",
              },
            }}
          >
            {visible ? <Close /> : <Dehaze />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
