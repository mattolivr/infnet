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

interface HeaderProps {
  sticky?: boolean;
}

const headerTheme = createTheme(global, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          color: global.palette?.secondary?.contrastText,
          boxShadow: "none",

          paddingInline: global.spacing(1),
          paddingBlock: global.spacing(1.5),

          [global.breakpoints.up("sm")]: {
            paddingBlock: global.spacing(2),
          },

          [global.breakpoints.up("lg")]: {
            paddingTop: global.spacing(2),
            paddingBottom: global.spacing(0.5),
            display: "block",
          },

          variants: [
            {
              props: { position: "sticky" },
              style: {
                background: global.palette?.background?.blueGradient,

                paddingInline: global.spacing(3.5),

                borderBottomLeftRadius: global.shape.borderRadiusLg,
                borderBottomRightRadius: global.shape.borderRadiusLg,

                [global.breakpoints.up("sm")]: {
                  paddingInline: global.spacing(2),
                  paddingBlock: global.spacing(1),
                  borderRadius: global.shape.borderRadius,
                },

                [global.breakpoints.up("lg")]: {
                  display: "none",
                },
              },
            },
          ],
        },
      },
    },
  },
});

export default function Header({ sticky }: HeaderProps = {}) {
  const { visible } = useMenu();

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position={sticky ? "sticky" : "static"}>
        <Toolbar disableGutters>
          <Typography variant="h1" sx={{ flexGrow: 1 }}>
            Caderno
          </Typography>
          <IconButton color="default" onClick={() => toggleMenu()}>
            {visible ? <Close /> : <Dehaze />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
