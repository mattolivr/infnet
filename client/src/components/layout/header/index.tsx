import {
  AppBar,
  IconButton,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { global } from "../../../global.theme";
import Icon from "../../icon";
import { Link, useLocation, useNavigate } from "react-router";
import { useMenu } from "../menu/context";
import { header } from "./theme";
import { useHeader } from "./context";

const HeaderRoot = styled(AppBar, {
  name: "Header",
  slot: "root",
})();

const LogoIconRoot = styled(IconButton, {
  name: "Header",
  slot: "logoIcon",
})();

const LogoTextRoot = styled(Typography, {
  name: "Header",
  slot: "logoText",
})();

const PageName = styled(Typography, {
  name: "Header",
  slot: "pageName",
})();

export const LogoIcon = () => (
  <LogoIconRoot disableRipple>
    <Icon name="school" />
  </LogoIconRoot>
);

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleMenu, visible } = useMenu();
  const { pagename } = useHeader();

  const mobile = useMediaQuery(global.breakpoints.down("sm"));
  const isHomePage = location.pathname === "/";

  const handleBack = () => {
    if (visible) {
      toggleMenu();
    }
    navigate(-1);
  };

  const LogoText = ({ visible }: { visible: boolean }) => (
    <LogoTextRoot variant="h1" visibility={visible ? "visible" : "hidden"}>
      Caderno
    </LogoTextRoot>
  );

  const PageTitle = () => {
    if (visible) return <PageName variant="h2">Menu</PageName>;
    if (pagename) return <PageName variant="h2">{pagename}</PageName>;
    return <LogoText visible={!isHomePage} />;
  };

  const MobileHeader = () => (
    <>
      <IconButton onClick={handleBack}>
        <Icon name="arrow_back" />
      </IconButton>

      <PageTitle />

      <IconButton onClick={toggleMenu}>
        <Icon name={visible ? "close" : "menu"} />
      </IconButton>
    </>
  );

  const MainHeader = () => (
    <>
      {!useMediaQuery(global.breakpoints.up("md")) && <LogoIcon />}
      <LogoText visible={!isHomePage} />

      {useMediaQuery(global.breakpoints.only("sm")) && (
        <IconButton>
          <Link to="https://github.com/mattolivr/infnet" target="_blank">
            <Icon name="github" />
          </Link>
        </IconButton>
      )}

      {useMediaQuery(global.breakpoints.only("md")) && (
        <>
          <IconButton onClick={handleBack}>
            <Icon name="arrow_back" />
          </IconButton>

          <IconButton onClick={toggleMenu}>
            <Icon name={visible ? "close" : "menu"} />
          </IconButton>
        </>
      )}
    </>
  );

  return (
    <ThemeProvider theme={header}>
      <HeaderRoot>
        <Toolbar>
          {mobile && <MobileHeader />}
          {!mobile && <MainHeader />}
        </Toolbar>
      </HeaderRoot>
    </ThemeProvider>
  );
}
