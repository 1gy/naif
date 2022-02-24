import { Box, Divider, Tab, Tabs } from "@mui/material";
import { Suspense, useTransition, VFC } from "react";
import { LoadingIndicator } from "../../parts/LoadingIndicator";
import { Textarea } from "../../parts/Textarea";
import {
  useConvertedText,
  useConvertMode,
  useInputText,
  useSetConvertMode,
  useSetInputText,
} from "./Base64.logic";

const ModeSwitch: VFC = () => {
  const convertMode = useConvertMode();
  const setConvertMode = useSetConvertMode();

  return (
    <Tabs
      value={convertMode}
      onChange={(_, value) => setConvertMode(value)}
      variant="fullWidth"
    >
      <Tab label="encode" value="encode" />
      <Tab label="decode" value="decode" />
    </Tabs>
  );
};

const Output: VFC = () => {
  const [succsess, convertedText] = useConvertedText();
  return (
    <Textarea
      value={succsess ? convertedText : "error"}
      onChange={() => {/** nop */}}
      readOnly
    />
  );
};

const InOut: VFC = () => {
  const inputText = useInputText();
  const setInputText = useSetInputText();
  const [isPending, startTransition] = useTransition();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Textarea
          value={inputText}
          onChange={(e) => startTransition(() => setInputText(e.target.value))}
        />
      </Box>
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
          {isPending && <LoadingIndicator />}
          <Suspense fallback={<LoadingIndicator />}>
            <Output />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export const Base64: VFC = () => {
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
        <InOut />
      </Box>
    </Box>
  );
};
