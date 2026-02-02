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
import { global } from "../../../global.theme";
import { useMenu } from "./context";
import { useManifest } from "../../../hooks/useManifest";
import Card, { CardHeader } from "../../card";
import { Link, useLocation } from "react-router";
import type Subject from "../../../interfaces/subject";
import type Block from "../../../interfaces/block";
import { content, menu } from "./theme";

export default function Menu({ mobile }: { mobile?: boolean }) {
  const { visible, toggleMenu } = useMenu();

  if (mobile && useMediaQuery(global.breakpoints.down("lg"))) {
    return (
      <ThemeProvider theme={menu}>
        <SwipeableDrawer
          open={visible}
          onClose={toggleMenu}
          onOpen={toggleMenu}
        >
          <MenuContent />
        </SwipeableDrawer>
      </ThemeProvider>
    );
  } else if (!mobile && useMediaQuery(global.breakpoints.up("lg"))) {
    return (
      <ThemeProvider theme={menu}>
        <Drawer variant="permanent">
          <MenuContent />
        </Drawer>
      </ThemeProvider>
    );
  }
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
    <ThemeProvider theme={content}>
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
