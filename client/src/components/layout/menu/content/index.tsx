import {
  BottomNavigation,
  BottomNavigationAction,
  createTheme,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { global } from "../../../../theme";
import Header from "../../header";
import { useState } from "react";
import { useManifest } from "../../../../hooks/useManifest";
import Icon from "../../../icon";
import { Link, useLocation } from "react-router";
import { useMenu } from "../context";

const MenuContentRoot = styled("div", {
  name: "MenuContent",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  paddingInline: theme.spacing(2),
}));

const MenuContentLists = styled("div", {
  name: "MenuContent",
  slot: "lists",
})(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 0,
  flexGrow: 1,
  overflowY: "hidden",

  [global.breakpoints.up("sm")]: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
}));

const MenuContentPrimaryList = styled(List, {
  name: "MenuContent",
  slot: "primaryList",
})(({ theme }) => ({
  display: "none",
  [global.breakpoints.up("sm")]: {
    display: "block",
    marginTop: theme.spacing(1),
    width: 200,
    flexBasis: 200,
    flexShrink: 0,
  },
}));

const MenuContentSecondaryList = styled(List, {
  name: "MenuContent",
  slot: "secondaryList",
})(({ theme }) => ({
  display: "block",
  flexGrow: 1,
  overflowY: "auto",
  paddingBlock: theme.spacing(1),
  position: "relative",
  zIndex: 1,
  [global.breakpoints.up("sm")]: {
    paddingBlock: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),

    "&:has(*)": {
      paddingLeft: theme.spacing(1),
    },
  },
}));

const menuContentTheme = createTheme(global, {
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: global.alpha(global.palette?.primary?.main, 0.3),
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          overflowY: "auto",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: global.palette?.secondary?.contrastText,
          marginBlock: global.spacing(3),
          paddingInline: global.spacing(1),

          "&:first-of-type": {
            marginTop: global.spacing(2),
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: global.palette.secondary.contrastText,
          borderRadius: global.spacing(2),
          marginBlock: global.spacing(0.5),
          paddingInline: global.spacing(1.5),
          gap: global.spacing(1),

          "& > a": {
            display: "inherit",
            alignItems: "inherit",
            gap: "inherit",

            width: "100%",
            textDecoration: "none",
          },

          "& span": {
            color: global.palette.secondary.contrastText,
          },

          "&.Mui-selected": {
            backgroundColor: global.palette.primary.main,
            color: global.palette.primary.contrastText,

            "& span": {
              color: global.palette.primary.contrastText,
            },
          },

          "&.Mui-selected:hover": {
            backgroundColor: global.palette.secondary.dark,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: global.spacing(0),
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          background: "none",
          paddingTop: global.spacing(1),
          paddingBottom: global.spacing(3),
          height: "auto",
          display: "flex",

          [global.breakpoints.up("sm")]: {
            display: "none",
          },
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: global.palette?.secondary?.contrastText,
          padding: global.spacing(1),
          borderRadius: global.shape.borderRadiusLg,
          gap: global.spacing(1),

          "&.Mui-selected": {
            backgroundColor: global.palette?.primary?.main,
            color: global.palette?.primary?.contrastText,
          },
        },
      },
    },
  },
});

interface MenuItemModel {
  label: string;
  icon?: string;
  children?: MenuItemModel[];
  route?: string;
}

export default function MenuContent() {
  const { blocks, getRawId } = useManifest();
  const { setVisible } = useMenu();
  const location = useLocation();

  const [index, setIndex] = useState(-1);

  const items: MenuItemModel[] = [
    {
      label: "Início",
      icon: "home",
      route: "/home",
    },
    {
      label: "Blocos",
      icon: "dashboard",
      children: blocks
        .filter((block) => block.subjects.length > 0)
        .map((block) => ({
          label: block.name,
          icon: block.icon,
          children: block.subjects.map((subject) => ({
            label: subject.name,
            icon: subject.icon,
            route: `/block/${getRawId(block.id)}/subject/${getRawId(subject.id)}`,
          })),
        })),
    },
    {
      label: "Sobre",
      icon: "info",
      route: "/about",
    },
  ];

  const handleItemClick = (newIndex: number, hasChildren: boolean) => {
    setIndex(newIndex);

    if (!hasChildren) {
      setVisible(false);
    }
  };

  const handleSubItemClick = () => {
    setVisible(false);
  };

  const isCurrentRoute = (route?: string): boolean => {
    return (route && location.pathname.includes(route)) || false;
  };

  const hasActiveChild = (item: MenuItemModel): boolean => {
    if (item.route && isCurrentRoute(item.route)) {
      return true;
    }

    if (item.children) {
      return item.children.some((child) => hasActiveChild(child));
    }

    return false;
  };

  return (
    <MenuContentRoot>
      <ThemeProvider theme={menuContentTheme}>
        <Header />
        <Divider />
        <MenuContentLists>
          <MenuContentSecondaryList disablePadding>
            {items[index]?.children?.map((item, i) => {
              if (item.children) {
                return (
                  <div key={"menu-sec-group-" + i}>
                    <MenuItemHeader menuItem={item} />

                    {item.children.map((subItem, j) => (
                      <MenuItem
                        key={"menu-sec-sub-item-" + i + "-" + j}
                        menuItem={subItem}
                        selected={isCurrentRoute(subItem.route)}
                        onClick={() => handleSubItemClick()}
                      />
                    ))}
                  </div>
                );
              }

              return (
                <MenuItem
                  key={"menu-sec-item" + i}
                  menuItem={item}
                  selected={isCurrentRoute(item.route)}
                  onClick={() => handleSubItemClick()}
                />
              );
            })}
          </MenuContentSecondaryList>
          <Divider />
          <BottomNavigation
            showLabels
            value={items.findIndex((item) => isCurrentRoute(item.route))}
            onChange={(_event, newValue) => {
              handleItemClick(newValue, !!items[newValue].children);
            }}
          >
            {items.map((item, i) => (
              <BottomNavigationAction
                key={"bottomnav-" + i}
                label={item.label}
                icon={
                  <Icon name={item.icon} filled={isCurrentRoute(item.route)} />
                }
                component={Link}
                to={item.route || "#"}
                sx={{ textDecoration: "none" }}
              />
            ))}
          </BottomNavigation>
          <MenuContentPrimaryList disablePadding>
            {items.map((item, i) => (
              <MenuItem
                key={"menu-item" + i}
                menuItem={item}
                selected={hasActiveChild(item)}
                onClick={() => handleItemClick(i, !!item.children)}
              />
            ))}
          </MenuContentPrimaryList>
        </MenuContentLists>
      </ThemeProvider>
    </MenuContentRoot>
  );
}

interface MenuItemHeaderProps {
  menuItem: MenuItemModel;
}

function MenuItemHeader(props: MenuItemHeaderProps) {
  return (
    <ListSubheader disableSticky>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {props.menuItem.label}
      </Typography>
    </ListSubheader>
  );
}

interface MenuItemProps {
  menuItem: MenuItemModel;
  selected: boolean;
  onClick: () => void;
}

function MenuItem(props: MenuItemProps) {
  return (
    <ListItemButton
      selected={props.selected}
      onClick={props.onClick}
      component={props.menuItem.route ? Link : "div"}
      to={props.menuItem.route}
      sx={{ textDecoration: "none" }}
    >
      <ListItemIcon>
        <Icon name={props.menuItem.icon} filled={props.selected} />
      </ListItemIcon>
      <ListItemText primary={props.menuItem.label} />
    </ListItemButton>
  );
}
