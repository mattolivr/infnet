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
import { useEffect, useState } from "react";
import { useManifest } from "../../../../hooks/useManifest";
import Icon from "../../../icon";
import { Link, useLocation } from "react-router";
import { toggleMenu, useMenu } from "../context";

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

interface MenuIndex {
  current: number[];
  original: number[];
}

export default function MenuContent() {
  const { blocks, getRawId } = useManifest();
  const { setVisible } = useMenu();
  const location = useLocation();

  const [index, setIndex] = useState<MenuIndex>({
    current: [],
    original: [],
  });

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

  useEffect(() => {
    const newIndex = getCurrentIndex(location.pathname, items);

    setIndex({
      current: newIndex,
      original: index.original.length === 0 ? newIndex : index.original,
    });
  }, [location.pathname]);

  const handleItemClick = (newIndex: number, hasChildren: boolean) => {
    setIndex({
      current: [newIndex],
      original: index.original,
    });

    if (!hasChildren) {
      setVisible(false);
    }
  };

  const handleSubItemClick = (newIndex: number) => {
    setIndex({
      current: [index.current[0], newIndex],
      original: index.original,
    });

    setVisible(false);
  };

  return (
    <MenuContentRoot>
      <ThemeProvider theme={menuContentTheme}>
        <Header />
        <Divider />
        <MenuContentLists>
          <MenuContentSecondaryList disablePadding>
            {items[index.current[0]]?.children?.map((item, i) => {
              if (item.children) {
                return (
                  <div key={"menu-sec-group-" + i}>
                    <MenuItemHeader menuItem={item} />

                    {item.children.map((subItem, j) => (
                      <MenuItem
                        key={"menu-sec-sub-item-" + i + "-" + j}
                        menuItem={subItem}
                        selected={j === index.current[1]}
                        onClick={() => handleSubItemClick(j)}
                      />
                    ))}
                  </div>
                );
              }

              return (
                <MenuItem
                  key={"menu-sec-item" + i}
                  menuItem={item}
                  selected={i === index.current[1]}
                  onClick={() => handleSubItemClick(i)}
                />
              );
            })}
          </MenuContentSecondaryList>
          <Divider />
          <BottomNavigation
            showLabels
            value={index.current[0]}
            onChange={(_event, newValue) => {
              handleItemClick(newValue, !!items[newValue].children);
            }}
          >
            {items.map((item, i) => (
              <BottomNavigationAction
                key={"bottomnav-" + i}
                label={item.label}
                icon={<Icon name={item.icon} filled={i === index.current[0]} />}
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
                selected={i === index.current[0]}
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

function getCurrentIndex(
  currentPath: string,
  items: MenuItemModel[],
  level: number = 0,
): number[] {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.route === currentPath) {
      return [i];
    }

    if (item.children) {
      const childIndex = getCurrentIndex(currentPath, item.children, level + 1);
      if (childIndex.length > 0) {
        return [i, ...childIndex];
      }
    }
  }

  return [];
}
