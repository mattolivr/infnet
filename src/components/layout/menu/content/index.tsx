import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  createTheme,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
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

const contentTheme = createTheme(global, {
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          background: "none",
          marginInline: 0,
          paddingInline: {
            xs: 1,
            sm: 1,
          },
          paddingTop: {
            sm: 2,
          },
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        sx: {
          borderColor: "#b1d8ff6b",
          marginBlock: {
            xs: 0,
            md: 0.5,
          },
        },
      },
    },
    MuiListSubheader: {
      defaultProps: {
        sx: {
          background: "none",
          color: "primary.contrastText",
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {
        sx: {
          color: "primary.contrastText",
          borderRadius: 2,
          marginBlock: 0.5,
          "& .MuiSvgIcon-root": {
            color: "primary.contrastText",
          },
          "&.Mui-selected": {
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          },
          "&.Mui-selected .MuiSvgIcon-root": {
            color: "secondary.contrastText",
          },
        },
      },
    },
    MuiListItemIcon: {
      defaultProps: {
        sx: {
          minWidth: 42,
        },
      },
    },
    MuiBottomNavigation: {
      defaultProps: {
        sx: {
          background: "none",
          marginTop: 1,
          marginBottom: 4,
        },
      },
    },
    MuiBottomNavigationAction: {
      defaultProps: {
        sx: {
          color: "primary.contrastText",
          borderRadius: 2,
          height: 74,
          gap: "6px",
          "&.Mui-selected": {
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingInline: 2.5,
      }}
    >
      <ThemeProvider theme={contentTheme}>
        <Header theme={contentTheme} />
        <Divider />
        <List
          sx={{ flexGrow: 1, overflowY: "auto", paddingBlock: 1 }}
          disablePadding
        >
          {getSecondaryItems(itens[current]).map((item, index) => {
            if (item.children) {
              return (
                <ListSubheader key={index} disableSticky>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "0.825rem",
                      textTransform: "uppercase",
                      marginBlock: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                </ListSubheader>
              );
            }
            return (
              <ListItemButton
                key={index}
                selected={index === currentSecondary}
                onClick={() => setCurrentSecondary(index)}
              >
                <ListItemIcon>{item.icon && item.icon[0]}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
        <Divider />
        <BottomNavigation
          showLabels
          value={current}
          onChange={(_event, newValue) => {
            setCurrent(newValue);
          }}
        >
          {itens.map((item) => (
            <BottomNavigationAction
              label={item.label}
              icon={
                item.icon && item.icon[current === itens.indexOf(item) ? 1 : 0]
              }
            />
          ))}
        </BottomNavigation>
      </ThemeProvider>
    </Box>
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
    label: "Exercícios",
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
