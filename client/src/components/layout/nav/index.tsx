import {
  createTheme,
  List,
  ListItemButton,
  styled,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { global } from "../../../theme";
import { Link, useLocation } from "react-router";
import Icon from "../../icon";

// TODO: verificar como será implementado quando colocar a pesquisa
interface NavRoute {
  name: string;
  icon: string;
  route: string;
  selectedName?: string;
}

const NavRoot = styled("nav", {
  name: "Nav",
  slot: "root",
})({
  display: "flex",
});

const NavDock = styled(List, {
  name: "Nav",
  slot: "dock",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",

  [theme.breakpoints.up("sm")]: {
    flexGrow: 0,
  },
}));

const NavButton = styled(ListItemButton, {
  name: "Nav",
  slot: "button",
})(() => ({
  padding: 0,
  borderRadius: global.shape.borderRadius,
}));

const navTheme = createTheme(global, {
  components: {
    Nav: {
      styleOverrides: {
        root: {
          width: "100%",
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",

          padding: global.spacing(1),

          [global.breakpoints.up("md")]: {
            height: "100%",
            position: "static",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            padding: 0,
          },
        },
        dock: {
          backgroundColor: global.palette.background.paper,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",

          flexGrow: 1,
          padding: global.spacing(1.5),
          borderRadius: global.shape.borderRadius,
          gap: global.spacing(1),

          [global.breakpoints.up("md")]: {
            backgroundColor: "transparent",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            padding: 0,
          },
        },
        button: {
          "& a": {
            color: global.palette.text.primary,

            flexGrow: 1,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

            gap: global.spacing(0.75),
            paddingBlock: global.spacing(1.5),
            paddingInline: global.spacing(3),
            borderRadius: global.shape.borderRadius,

            textDecoration: "none",
          },

          "&:not(&.Mui-selected) span:not(:first-of-type)": {
            display: "none",
          },

          "&.Mui-selected": {
            background: global.palette.background.blueGradient,

            "& a": {
              color: global.palette.text.white,
            },
          },

          [global.breakpoints.up("md")]: {
            backgroundColor: global.palette.background.paper,

            "& a": {
              padding: global.spacing(1),
            },

            "& span:not(:first-of-type)": {
              display: "none",
            },
          },
        },
      },
    },
  },
});

export default function Nav() {
  const location = useLocation();
  const tablet = useMediaQuery(global.breakpoints.only("sm"));
  const desktop = useMediaQuery(global.breakpoints.up("md"));

  const navRoutes: NavRoute[] = [
    {
      name: "Início",
      icon: "cottage",
      route: "/",
    },
    {
      name: "Explorar",
      icon: "explore",
      route: "/explore",
    },
    {
      name: "Sobre",
      icon: "info",
      route: "/about",
    },
  ];

  if (tablet) {
    navRoutes.unshift({
      name: "Voltar",
      icon: "arrow_back",
      route: "/",
    });

    navRoutes.push({
      name: "Menu",
      icon: "menu",
      route: "/",
    });
  }

  const isSelected = (route: string) => {
    if (route === "/explore" && location.pathname.startsWith("/block")) {
      return true;
    }
    return route === location.pathname;
  };

  return (
    <ThemeProvider theme={navTheme}>
      <NavRoot>
        <NavDock>
          {navRoutes.map((navRoute, index) => {
            const selected = isSelected(navRoute.route);
            return (
              <NavButton key={`nav-item-${index}`} selected={selected}>
                <Link key={navRoute.name} to={navRoute.route}>
                  <Icon name={navRoute.icon} filled={selected} />
                  <Typography variant="button">{navRoute.name}</Typography>
                </Link>
              </NavButton>
            );
          })}
        </NavDock>
        {desktop && <NavCredits />}
      </NavRoot>
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
      <NavButton sx={{ flexGrow: 0 }}>
        <Link to="">
          <Icon name="folder_open" />
        </Link>
      </NavButton>
    </NavCreditsRoot>
  );
}
