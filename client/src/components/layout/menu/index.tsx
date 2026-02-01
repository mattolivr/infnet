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
  useMediaQuery,
} from "@mui/material";
import { global } from "../../../theme";
import { useMenu } from "./context";
import { useManifest } from "../../../hooks/useManifest";
import Card, { CardHeader } from "../../card";
import { Link } from "react-router";
import type Subject from "../../../interfaces/subject";
import type Block from "../../../interfaces/block";

const menuTheme = createTheme(global, {
  components: {
    MuiDrawer: {
      defaultProps: {
        ModalProps: {
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
                },
              },
            },
            {
              props: { variant: "temporary" },
              style: {
                position: "absolute",
                width: "100%",
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
  const desktop = useMediaQuery(global.breakpoints.up("lg"));

  return (
    <ThemeProvider theme={menuTheme}>
      {!desktop && (
        <SwipeableDrawer
          open={visible}
          onClose={toggleMenu}
          onOpen={toggleMenu}
        >
          <MenuContent />
        </SwipeableDrawer>
      )}
      {desktop && (
        <Drawer variant="permanent">
          <MenuContent />
        </Drawer>
      )}
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
          overflow: "hidden",

          [global.breakpoints.up("sm")]: {
            paddingInline: global.spacing(2),
          },

          [global.breakpoints.up("md")]: {
            paddingTop: 72, // Header height
            paddingBottom: global.spacing(2),
            paddingLeft: 72, // Nav width
          },
        },
        group: {
          "&:first-of-type > li:first-of-type": {
            paddingTop: 0,
          },

          display: "flex",
          flexDirection: "column",
        },
        subheader: {
          backgroundColor: "transparent",
          paddingBlock: global.spacing(2),
          paddingInline: global.spacing(1),
        },
        item: {
          padding: global.spacing(2),

          "& a": {
            textDecoration: "none",
          },

          [global.breakpoints.up("sm")]: {
            backgroundColor: global.palette.background.paper,
            borderRadius: global.shape.borderRadius,

            alignItems: "start",
          },
        },
      },
    },
    Card: {
      styleOverrides: {
        root: {
          padding: 0,

          [global.breakpoints.up("sm")]: {
            backgroundColor: "transparent",
          },
        },
        body: {
          gap: 0,

          [global.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: global.spacing(2),
          },
        },
      },
    },
    CardHeader: {
      styleOverrides: {
        root: {
          [global.breakpoints.up("sm")]: {
            flexDirection: "column",
            alignItems: "flex-start",
          },
        },
      },
    },
  },
});

function MenuContent() {
  const { blocks, getRawId } = useManifest();
  const { toggleMenu } = useMenu();

  const getSubjectRoute = (block: Block, subject: Subject): string => {
    return `/block/${getRawId(block.id)}/subject/${getRawId(subject.id)}`;
  };

  const handleClick = () => {
    toggleMenu();
  };

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
                  <MenuContentItem
                    key={"menu-item-" + subject.id}
                    onClick={handleClick}
                  >
                    <Link to={getSubjectRoute(block, subject)}>
                      <CardHeader
                        title={subject.name}
                        subtitle={subject.teacher}
                        icon={subject.icon}
                      />
                    </Link>
                  </MenuContentItem>
                ))}
              </Card>
            </MenuContentGroup>
          ))}
      </MenuContentRoot>
    </ThemeProvider>
  );
}
