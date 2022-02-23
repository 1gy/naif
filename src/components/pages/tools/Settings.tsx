import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
} from "@mui/material";
import { VFC } from "react";
import { getVersion } from "./Settings.logic";
import {
  useSetThemeId,
  useSortedThemes,
  useThemeId,
} from "../../../hooks/settings";
import { ThemeId } from "../../../themes";

const version = getVersion();

const ThemeSelect: VFC = () => {
  const themeId = useThemeId();
  const setThemeId = useSetThemeId();
  const sortedThemes = useSortedThemes();

  return (
    <Select
      value={themeId}
      onChange={(e) => setThemeId(e.target.value as ThemeId)}
    >
      {sortedThemes.map(([key, item]) => (
        <MenuItem key={key} value={key}>{item.text}</MenuItem>
      ))}
    </Select>
  );
};

const Appearance: VFC = () => {
  return (
    <List subheader={<ListSubheader>Appearance</ListSubheader>}>
      <ListItem sx={{ pl: 4 }} divider>
        <ListItemText primary="Theme" secondary="Choose color scheme." />
        <ThemeSelect />
      </ListItem>
    </List>
  );
};

const About: VFC = () => {
  return (
    <List subheader={<ListSubheader>About</ListSubheader>}>
      <ListItem sx={{ pl: 4 }} divider>
        <ListItemText primary={`Current version : ${version}`} />
      </ListItem>
    </List>
  );
};

export const Settings: VFC = () => {
  return (
    <Box>
      <Appearance />
      <About />
    </Box>
  );
};
