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
import { useMenu } from "../menu/context";

const HeaderRoot = styled(AppBar, {
  name: "Header",
  slot: "root",
})();

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
        root: {
          zIndex: global.zIndex.header,
        },
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

const PageName = styled(Typography, {
  name: "Header",
  slot: "pageName",
})(({ theme }) => ({
  flexGrow: 1,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const LogoIcon = () => (
  <LogoIconRoot>
    <Icon name="school" />
  </LogoIconRoot>
);

export default function Header() {
  const location = useLocation();
  const { toggleMenu, visible } = useMenu();

  const mobile = useMediaQuery(global.breakpoints.down("sm"));
  const isHomePage = location.pathname === "/";

  const LogoText = () => <LogoTextRoot variant="h1">Caderno</LogoTextRoot>;

  const MobileHeader = () => (
    <>
      <IconButton sx={{ visibility: visible ? "hidden" : "visible" }}>
        <Icon name="arrow_back" />
      </IconButton>

      {!visible && isHomePage && <LogoText />}
      {!visible && !isHomePage && (
        <PageName variant="h2">Mobile-first UI com React</PageName>
      )}
      {visible && <PageName variant="h2">Menu</PageName>}

      <IconButton onClick={toggleMenu}>
        <Icon name={visible ? "close" : "menu"} />
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
      <HeaderRoot>
        <Toolbar>
          {mobile && <MobileHeader />}
          {!mobile && <MainHeader />}
        </Toolbar>
      </HeaderRoot>
    </ThemeProvider>
  );
}
