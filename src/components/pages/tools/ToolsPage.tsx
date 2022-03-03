import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import type { VFC } from "react";
import { useDevice } from "../../../hooks/device";
import { MenuIcon } from "../../icons/MenuIcon";
import { Page } from "../../parts/Page";
import { Base64 } from "./Base64";
import { Random } from "./Random";
import { Settings } from "./Settings";
import {
  TabDefinition,
  TabId,
  useIsMenuOpen,
  useSelectedTabId,
  useSetSelectedTabId,
  useSortedTabs,
  useToggleMenuOpen,
} from "./ToolsPage.logic";

const tabItems: TabDefinition = {
  random: {
    order: 0,
    text: "Random",
    component: () => <Random />,
  },
  base64: {
    order: 1,
    text: "Base64",
    component: () => <Base64 />,
  },
  hash: {
    order: 2,
    text: "Hash",
    component: () => "Not implemented",
  },
  settings: {
    order: 3,
    text: "Settings",
    component: () => <Settings />,
  },
};

const Sidebar: VFC = () => {
  const tabId = useSelectedTabId();
  const setTabId = useSetSelectedTabId();
  const sortedTabs = useSortedTabs(tabItems);

  return (
    <List
      component="nav"
      subheader={<ListSubheader>Tools</ListSubheader>}
    >
      {sortedTabs.map((
        [key, item],
      ) => (
        <ListItemButton
          key={key}
          selected={key === tabId}
          onClick={() => setTabId(key as TabId)}
        >
          <ListItemText primary={item.text} sx={{ ml: 1, mr: 12 }} />
        </ListItemButton>
      ))}
    </List>
  );
};

const Content: VFC = () => {
  const tabId = useSelectedTabId();
  return <>{tabItems[tabId].component()}</>;
};

const Titlebar: VFC = () => {
  const toggleMenuOpen = useToggleMenuOpen();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={toggleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Naif
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export const ToolsPage: VFC = () => {
  const isMenuOpen = useIsMenuOpen();
  const device = useDevice();

  return (
    <Page>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Titlebar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            border: 4,
            borderColor: "primary.main",
            overflow: "hidden",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box
            component="aside"
            sx={{
              flexShrink: 0,
              overflow: "auto",
              m: 0,
              display: isMenuOpen ? "inline" : "none",
            }}
          >
            <Sidebar />
          </Box>
          <Divider
            orientation={device === "desktop" ? "vertical" : "horizontal"}
            sx={{
              bgcolor: "primary.main",
              borderRightWidth: 2,
              borderBottomWidth: 2,
            }}
          />
          <Box
            component="main"
            sx={{ flexGrow: 1, overflow: "hidden", m: 0 }}
          >
            <Content />
          </Box>
        </Box>
      </Box>
    </Page>
  );
};
