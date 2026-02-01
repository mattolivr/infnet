import {
  createTheme,
  Drawer,
  List,
  ListItemButton,
  ListSubheader,
  styled,
  SwipeableDrawer,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { global } from "../../../theme";
import { useMenu } from "./context";
import { useManifest } from "../../../hooks/useManifest";
import Card, { CardHeader } from "../../card";
import { Link, useLocation } from "react-router";
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
          border: "none",
          padding: global.spacing(0),

          [global.breakpoints.up("lg")]: {
            background: "transparent",
          },

          variants: [
            {
              props: { variant: "permanent" },
              style: {
                display: "none",
                position: "relative",
                maxWidth: "320px",

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

          [global.breakpoints.up("lg")]: {
            padding: global.spacing(0),
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
          color: global.palette.text.primary,
          paddingBlock: global.spacing(2),
          paddingInline: global.spacing(1),

          ...global.typography.h3,

          [global.breakpoints.up("lg")]: {
            paddingInline: global.spacing(1),

            ...global.typography.small,

            fontWeight: 400,
          },
        },
        item: {
          padding: 0,

          "& a": {
            textDecoration: "none",
            width: "100%",

            padding: global.spacing(2),
          },

          [global.breakpoints.down("sm")]: {
            "&.Mui-selected": {
              backgroundColor: "transparent",
            },
          },

          [global.breakpoints.up("sm")]: {
            backgroundColor: global.palette.background.paper,
            borderRadius: global.shape.borderRadius,

            alignItems: "start",
          },

          [global.breakpoints.up("lg")]: {
            backgroundColor: "transparent",

            "&.Mui-selected": {
              backgroundColor: "transparent",

              "& a *": {
                color: global.palette.primary.main,
              },
            },

            "& a": {
              paddingBlock: global.spacing(1.5),
              paddingInline: global.spacing(1.5),
            },
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
            borderRadius: 0,
          },
        },
        body: {
          gap: 0,

          [global.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: global.spacing(2),
          },

          [global.breakpoints.up("lg")]: {
            display: "flex",
            flexDirection: "column",
            gap: global.spacing(0),
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

          [global.breakpoints.up("lg")]: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: global.spacing(1),
          },
        },
        avatar: {
          backgroundColor: global.palette.background.lightGray,
          color: global.palette.text.tertiary,

          [global.breakpoints.up("lg")]: {
            backgroundColor: "transparent",
            color: global.palette.text.primary,

            width: "auto",
            height: "auto",

            padding: 0,

            "& span": {
              fontSize: "1rem",
            },
          },

          variants: [
            {
              props: { color: "primary" },
              style: {
                backgroundColor: global.palette.secondary.main,
                color: global.palette.secondary.contrastText,
              },
            },
          ],
        },
        titleContainer: {
          [global.breakpoints.up("lg")]: {
            paddingInline: 0,
          },
        },
        title: {
          [global.breakpoints.up("lg")]: {
            ...global.typography.small,
            lineHeight: 1.4,
          },
        },
        subtitle: {
          [global.breakpoints.up("lg")]: {
            display: "none",
          },
        },
      },
    },
  },
});

function MenuContent() {
  const { blocks, getRawId } = useManifest();
  const { toggleMenu } = useMenu();
  const location = useLocation();

  const getSubjectRoute = (block: Block, subject: Subject): string => {
    return `/block/${getRawId(block.id)}/subject/${getRawId(subject.id)}`;
  };

  const isSelected = (block: Block, subject: Subject): boolean => {
    const subjectRoute = getSubjectRoute(block, subject);
    return location.pathname === subjectRoute;
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
              <MenuContentHeader disableSticky>{block.name}</MenuContentHeader>

              <Card>
                {block.subjects.map((subject) => (
                  <MenuContentItem
                    key={"menu-item-" + subject.id}
                    onClick={handleClick}
                    selected={isSelected(block, subject)}
                  >
                    <Link to={getSubjectRoute(block, subject)}>
                      <CardHeader
                        title={subject.name}
                        subtitle={subject.teacher}
                        icon={subject.icon}
                        selected={isSelected(block, subject)}
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
