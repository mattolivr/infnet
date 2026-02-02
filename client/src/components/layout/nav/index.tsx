import {
  List,
  ListItemButton,
  styled,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router";
import Icon from "../../icon";
import { useMenu } from "../menu/context";
import { useEffect, useState } from "react";
import nav from "./theme";

const Root = styled("nav", {
  name: "Nav",
  slot: "root",
})({
  display: "flex",
});

const Dock = styled(List, {
  name: "Nav",
  slot: "dock",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",

  [theme.breakpoints.up("sm")]: {
    flexGrow: 0,
  },
}));

const Button = styled(ListItemButton, {
  name: "Nav",
  slot: "button",
})(({ theme }) => ({
  padding: 0,
  borderRadius: theme.shape.borderRadius,
}));

interface Route {
  index: number;
  name: string;
  icon: string;
  path?: string;
  onClick?: () => void;
  isSelected?: (item: Route) => boolean;
}

export default function Nav() {
  const location = useLocation();
  const { toggleMenu, visible } = useMenu();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(-1);

  const tablet = useMediaQuery(nav.breakpoints.only("sm"));
  const desktop = useMediaQuery(nav.breakpoints.up("md"));

  useEffect(() => {
    setSelected(-1);
  }, [location]);

  const routes: Route[] = [
    tablet && {
      index: 0,
      name: "Voltar",
      icon: "arrow_back",
      isSelected: () => false,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      index: 1,
      name: "Início",
      icon: "cottage",
      path: "/",
    },
    {
      index: 2,
      name: "Explorar",
      icon: "explore",
      path: "/explore",
      isSelected: (item: Route) =>
        item.path === "/explore" &&
        (location.pathname.startsWith("/explore") ||
          location.pathname.startsWith("/block")),
    },
    {
      index: 3,
      name: "Sobre",
      icon: "info",
      path: "/about",
    },
    tablet && {
      index: 4,
      name: visible ? "Fechar" : "Menu",
      icon: visible ? "close" : "menu",
      onClick: () => {
        if (!visible) {
          toggleMenu();
          return;
        }
        setSelected(-1);
      },
      isSelected: () => tablet && visible,
    },
  ].filter(Boolean) as Route[];

  const isSelected = (route: Route) => {
    if (selected >= 0 && selected !== route.index) {
      return false;
    }

    if (route.isSelected) {
      return route.isSelected(route);
    }

    return route.path === location.pathname;
  };

  return (
    <ThemeProvider theme={nav}>
      <Root>
        <Dock>
          {routes.map((route, index) => {
            const selected = isSelected(route);
            return (
              <Button
                key={`nav-item-${index}`}
                selected={selected}
                onClick={() => {
                  if (visible) {
                    toggleMenu();
                  }
                  setSelected(route.index);
                  route.onClick?.();
                }}
              >
                <Link key={route.name} to={route.path || "#"}>
                  <Icon name={route.icon} filled={selected} />
                  <Typography variant="button">{route.name}</Typography>
                </Link>
              </Button>
            );
          })}
        </Dock>
        {desktop && <NavCredits />}
      </Root>
    </ThemeProvider>
  );
}

const NavCreditsRoot = styled("div", {
  name: "NavCredits",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(1.5),

  flexGrow: 1,
}));

const NavCreditsText = styled(Typography, {
  name: "NavCredits",
  slot: "text",
})(() => ({
  writingMode: "sideways-lr",
  textOrientation: "mixed",
  flexGrow: 1,
}));

function NavCredits() {
  return (
    <NavCreditsRoot>
      <NavCreditsText variant="caption">Mattolivr</NavCreditsText>
      <Button sx={{ flexGrow: 0 }}>
        <Link to="https://github.com/mattolivr/infnet" target="_blank">
          <Icon name="github" />
        </Link>
      </Button>
    </NavCreditsRoot>
  );
}
