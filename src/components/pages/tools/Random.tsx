import { Box, Button, Divider, Slider, Tab, Tabs } from "@mui/material";
import { VFC } from "react";
import { Textarea } from "../../parts/Textarea";
import {
  useGenerateUuid,
  useGenerateUuidCount,
  useMode,
  useSetGenerateUuidCount,
  useSetMode,
} from "./Random.logic";

const ModeSwitch: VFC = () => {
  const mode = useMode();
  const setMode = useSetMode();

  return (
    <Tabs
      value={mode}
      onChange={(_, value) => setMode(value)}
      variant="fullWidth"
    >
      <Tab label="uuid" value="uuid" />
      <Tab label="number" value="number" />
    </Tabs>
  );
};

const UuidGenerator: VFC = () => {
  const uuidCount = useGenerateUuidCount();
  const setUuidCount = useSetGenerateUuidCount();
  const [uuid, generateUuid] = useGenerateUuid();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ p: 4, flexGrow: 1 }}>
          <Slider
            step={1}
            min={1}
            max={30}
            value={uuidCount}
            onChange={(_, v) => setUuidCount(v as number)}
            marks
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ p: 4 }}>
          <Button variant="outlined" onClick={generateUuid}>Generate</Button>
        </Box>
      </Box>
      <Box sx={{ pl: 4, pr: 4, pb: 4, flexGrow: 1 }}>
        <Textarea value={uuid} onChange={() => {/** nop */}} />
      </Box>
    </Box>
  );
};

const NumberGenerator: VFC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      Not implemented
    </Box>
  );
};

export const Random: VFC = () => {
  const mode = useMode();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <ModeSwitch />
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        {mode === "uuid" && <UuidGenerator />}
        {mode === "number" && <NumberGenerator />}
      </Box>
    </Box>
  );
};
