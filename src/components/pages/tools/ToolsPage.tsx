import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import type { VFC } from "react";
import { Page } from "../../parts/Page";
import { Base64 } from "./Base64";
import { Random } from "./Random";
import { Settings } from "./Settings";
import {
  TabDefinition,
  TabId,
  useSelectedTabId,
  useSetSelectedTabId,
  useSortedTabs,
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
    <List component="nav" subheader={<ListSubheader>Tools</ListSubheader>}>
      {sortedTabs.map((
        [key, item],
      ) => (
        <ListItemButton
          key={key}
          selected={key === tabId}
          onClick={() => setTabId(key as TabId)}
        >
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );
};

const Content: VFC = () => {
  const tabId = useSelectedTabId();
  return <>{tabItems[tabId].component()}</>;
};

export const ToolsPage: VFC = () => {
  return (
    <Page>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          border: 4,
          borderColor: "primary.main",
        }}
      >
        <Box
          component="aside"
          sx={{ flexShrink: 0, width: "12em", overflow: "auto" }}
        >
          <Sidebar />
        </Box>
        <Divider orientation="vertical" />
        <Box
          component="main"
          sx={{ flexGrow: 1, overflow: "hidden", m: 1 }}
        >
          <Content />
        </Box>
      </Box>
    </Page>
  );
};
