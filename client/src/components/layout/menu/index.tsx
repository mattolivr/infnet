import {
  createTheme,
  Drawer,
  List,
  ListItemButton,
  ListSubheader,
  styled,
  SwipeableDrawer,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { global } from "../../../theme";
import { useMenu } from "./context";
import { useManifest } from "../../../hooks/useManifest";
import Card, { CardHeader } from "../../card";
import Header from "../header";

const menuTheme = createTheme(global, {
  components: {
    MuiDrawer: {
      defaultProps: {
        ModalProps: {
          container: document.getElementById("container"),
          keepMounted: true,
        },
      },
      styleOverrides: {
        paper: {
          background: global.palette?.background?.lightBlueGradient,
          padding: global.spacing(0),

          variants: [
            {
              props: { variant: "permanent" },
              style: {
                display: "none",
                position: "relative",
                minWidth: "250px",

                [global.breakpoints.up("lg")]: {
                  display: "block",
                  position: "relative",
                  borderRadius: global.shape.borderRadius,
                  maxWidth: 650,
                },
              },
            },
            {
              props: { variant: "temporary" },
              style: {
                display: "block",
                position: "absolute",
                width: "100%",

                [global.breakpoints.up("lg")]: {
                  display: "none",
                },
              },
            },
          ],
        },
      },
    },
    MuiSwipeableDrawer: {
      defaultProps: {
        anchor: "right",
      },
    },
  },
});

export default function Menu() {
  const { visible, toggleMenu } = useMenu();

  return (
    <ThemeProvider theme={menuTheme}>
      <SwipeableDrawer open={visible} onClose={toggleMenu} onOpen={toggleMenu}>
        <MenuContent />
      </SwipeableDrawer>
      <Drawer variant="permanent">
        <MenuContent />
      </Drawer>
    </ThemeProvider>
  );
}

const MenuContentRoot = styled(List, {
  name: "MenuContent",
  slot: "root",
})();

const MenuContentHeader = styled(ListSubheader, {
  name: "MenuContent",
  slot: "subheader",
})();

const MenuContentGroup = styled("div", {
  name: "MenuContent",
  slot: "group",
})();

const MenuContentItem = styled(ListItemButton, {
  name: "MenuContent",
  slot: "item",
})();

const menuContentTheme = createTheme(global, {
  components: {
    MenuContent: {
      styleOverrides: {
        root: {
          paddingInline: global.spacing(1),
          paddingBlock: 88, // Header and Bottom Nav height
        },
        group: {
          "&:first-child > li:first-child": {
            paddingTop: 0,
          },
        },
        subheader: {
          backgroundColor: "transparent",
          paddingBlock: global.spacing(2),
          paddingInline: global.spacing(1),
        },
        item: {
          padding: global.spacing(2),
        },
      },
    },
    Card: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        body: {
          gap: 0,
        },
      },
    },
  },
});

function MenuContent() {
  const { blocks } = useManifest();

  return (
    <ThemeProvider theme={menuContentTheme}>
      <MenuContentRoot>
        {blocks
          ?.filter((block) => block.subjects.length > 0)
          ?.map((block) => (
            <MenuContentGroup key={"menu-group-" + block.id}>
              <MenuContentHeader disableSticky>
                <Typography variant="h3">{block.name}</Typography>
              </MenuContentHeader>

              <Card>
                {block.subjects.map((subject) => (
                  <MenuContentItem key={"menu-item-" + subject.id}>
                    <CardHeader
                      title={subject.name}
                      subtitle={subject.teacher}
                      icon={subject.icon}
                    />
                  </MenuContentItem>
                ))}
              </Card>
            </MenuContentGroup>
          ))}
      </MenuContentRoot>
    </ThemeProvider>
  );
}
