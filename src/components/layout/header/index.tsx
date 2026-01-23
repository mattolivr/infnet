import { Dehaze, FileDownload } from "@mui/icons-material";
import {
  AppBar,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { global } from "../../../theme";

const headerTheme = createTheme(global, {
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
    MuiIconButton: {
      defaultProps: {
        sx: {
          color: "secondary.main",
          backgroundColor: "none",
          "&:hover": {
            backgroundColor: "none",
          },
        }
      }
    }
  },
});

export default function Header() {
  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Typography>Caderno</Typography>
          <IconButton>
            <Dehaze />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
