import {
  AppBar,
  createTheme,
  IconButton,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { global } from "../../../theme";
import Icon from "../../icon";
import { useLocation } from "react-router";

const PageName = styled(Typography, {
  name: "Header",
  slot: "pageName",
})(({ theme }) => ({
  flexGrow: 1,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const headerTheme = createTheme(global, {
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          background: "transparent",
          color: global.palette?.secondary?.contrastText,
          boxShadow: "none",

          paddingInline: global.spacing(2),
          paddingBlock: global.spacing(1.5),

          [global.breakpoints.up("md")]: {
            padding: 0,
          },
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          gap: global.spacing(2),

          [global.breakpoints.up("md")]: {
            minHeight: "40px",
            flexDirection: "row",
            justifyContent: "flex-end",
          },
        },
      },
    },
    Header: {
      styleOverrides: {
        logoText: {
          [global.breakpoints.up("md")]: {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
});

const LogoIconRoot = styled(IconButton, {
  name: "Header",
  slot: "logoIcon",
})(() => ({
  backgroundColor: "transparent",
  padding: 0,
  width: 42,
  height: 42,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& span": {
    fontSize: 32,
  },
}));

const LogoTextRoot = styled(Typography, {
  name: "Header",
  slot: "logoText",
})();

export const LogoIcon = () => (
  <LogoIconRoot>
    <Icon name="school" />
  </LogoIconRoot>
);

export default function Header() {
  const location = useLocation();

  const mobile = useMediaQuery(global.breakpoints.down("sm"));
  const isHomePage = location.pathname === "/";

  const LogoText = () => <LogoTextRoot variant="h1">Caderno</LogoTextRoot>;

  const MobileHeader = () => (
    <>
      <IconButton>
        <Icon name="arrow_back" />
      </IconButton>

      {isHomePage ? (
        <LogoText />
      ) : (
        <PageName variant="h2">Mobile-first UI com React</PageName>
      )}

      <IconButton>
        <Icon name="menu" />
      </IconButton>
    </>
  );

  const MainHeader = () => (
    <>
      {!useMediaQuery(global.breakpoints.up("md")) && <LogoIcon />}
      <LogoText />

      {(useMediaQuery(global.breakpoints.only("sm")) ||
        useMediaQuery(global.breakpoints.up("lg"))) && (
        <IconButton>
          <Icon name="folder_open" />
        </IconButton>
      )}

      {useMediaQuery(global.breakpoints.only("md")) && (
        <>
          <IconButton>
            <Icon name="arrow_back" />
          </IconButton>

          <IconButton>
            <Icon name="arrow_forward" />
          </IconButton>

          <IconButton>
            <Icon name="menu" />
          </IconButton>
        </>
      )}
    </>
  );

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar>
        <Toolbar>
          {mobile && <MobileHeader />}
          {!mobile && <MainHeader />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
