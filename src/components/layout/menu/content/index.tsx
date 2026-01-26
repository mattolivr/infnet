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
import {
  AdsClickOutlined,
  AdsClickRounded,
  CottageOutlined,
  CottageRounded,
  DashboardOutlined,
  DashboardRounded,
  DeveloperModeOutlined,
  DeveloperModeRounded,
  DevicesOtherOutlined,
  DevicesOtherRounded,
  FlipCameraAndroidOutlined,
  FlipCameraAndroidRounded,
  InfoOutlined,
  InfoRounded,
  RocketLaunchOutlined,
  RocketLaunchRounded,
  SettingsSuggestOutlined,
  SettingsSuggestRounded,
  SourceOutlined,
  SourceRounded,
  WebOutlined,
  WebRounded,
  WidgetsOutlined,
  WidgetsRounded,
} from "@mui/icons-material";
import { useState } from "react";

/** TODO: Quando criar as rotas, puxar os dois da mesma definição */
interface MenuItemProps {
  label: string;
  icon?: React.ReactNode[];
  children?: MenuItemProps[];
}

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
          paddingInline: global.spacing(1),

          "& .MuiSvgIcon-root": {
            color: global.palette.secondary.contrastText,
          },

          "&.Mui-selected": {
            backgroundColor: global.palette.primary.main,
            color: global.palette.primary.contrastText,
            "& .MuiSvgIcon-root": {
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
          minWidth: global.spacing(5.5),
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

export default function MenuContent() {
  const [current, setCurrent] = useState(0);
  const [currentSecondary, setCurrentSecondary] = useState(0);

  return (
    <MenuContentRoot>
      <ThemeProvider theme={menuContentTheme}>
        <Header />
        <Divider />
        <MenuContentLists>
          <MenuContentSecondaryList disablePadding>
            {getSecondaryItems(itens[current]).map((item, index) => {
              if (item.children) {
                return (
                  <ListSubheader key={"secondary-" + index} disableSticky>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                  </ListSubheader>
                );
              }
              return (
                <ListItemButton
                  key={"secondary-" + index}
                  selected={index === currentSecondary}
                  onClick={() => setCurrentSecondary(index)}
                >
                  <ListItemIcon>
                    {item.icon && item.icon[index === currentSecondary ? 1 : 0]}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </MenuContentSecondaryList>
          <Divider />
          <BottomNavigation
            showLabels
            value={current}
            onChange={(_event, newValue) => {
              setCurrent(newValue);
            }}
          >
            {itens.map((item, index) => (
              <BottomNavigationAction
                key={"bottomnav-" + index}
                label={item.label}
                icon={
                  item.icon &&
                  item.icon[current === itens.indexOf(item) ? 1 : 0]
                }
              />
            ))}
          </BottomNavigation>
          <MenuContentPrimaryList disablePadding>
            {itens.map((item, index) => (
              <ListItemButton
                key={"primary-" + index}
                selected={index === current}
                onClick={() => setCurrent(index)}
              >
                <ListItemIcon>
                  {item.icon && item.icon[index === current ? 1 : 0]}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </MenuContentPrimaryList>
        </MenuContentLists>
      </ThemeProvider>
    </MenuContentRoot>
  );
}

function getSecondaryItems(current: MenuItemProps): MenuItemProps[] {
  if (!current.children) {
    return [];
  }

  return current.children.flatMap((child) =>
    child.children ? [child, ...child.children] : [child],
  );
}

const itens: MenuItemProps[] = [
  {
    label: "Início",
    icon: [<CottageOutlined />, <CottageRounded />],
  },
  {
    label: "Disciplinas",
    icon: [<DashboardOutlined />, <DashboardRounded />],
    children: [
      {
        label: "Fundamentos do Desenvolvimento de Software",
        children: [
          {
            label: "Projeto de bloco",
            icon: [<SourceOutlined />, <SourceRounded />],
          },
          {
            label: "Programação web com HTML 5 e CSS 3",
            icon: [<WebOutlined />, <WebRounded />],
          },
          {
            label: "Programação web com JavaScript",
            icon: [<SettingsSuggestOutlined />, <SettingsSuggestRounded />],
          },
          {
            label: "Interatividade em páginas web",
            icon: [<WidgetsOutlined />, <WidgetsRounded />],
          },
          {
            label: "Programação web com JavaScript 2",
            icon: [<RocketLaunchOutlined />, <RocketLaunchRounded />],
          },
        ],
      },
      {
        label: "Desenvolvimento Front-end com Frameworks",
        children: [
          {
            label: "Projeto de bloco",
            icon: [<SourceOutlined />, <SourceRounded />],
          },
          {
            label: "Mobile-first UI com React",
            icon: [<DevicesOtherOutlined />, <DevicesOtherRounded />],
          },
          {
            label: "Fundamentos de React",
            icon: [<FlipCameraAndroidOutlined />, <FlipCameraAndroidRounded />],
          },
          {
            label: "Desennvolvimento mobile com React Native",
            icon: [<DeveloperModeOutlined />, <DeveloperModeRounded />],
          },
          {
            label: "Desenvolvimento web com React",
            icon: [<AdsClickOutlined />, <AdsClickRounded />],
          },
        ],
      },
    ],
  },
  {
    label: "Sobre",
    icon: [<InfoOutlined />, <InfoRounded />],
  },
];
