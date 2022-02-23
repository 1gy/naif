import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import type { VFC } from "react";
import { ToolsPage } from "./pages/tools/ToolsPage";
import { themes } from "../themes";
import { useThemeId } from "../hooks/settings";

const globalStyles = <GlobalStyles styles={{ body: { userSelect: "none" } }} />;

export const App: VFC = () => {
  const themeId = useThemeId();

  return (
    <>
      <CssBaseline />
      {globalStyles}
      <ThemeProvider theme={themes[themeId].theme}>
        <ToolsPage />
      </ThemeProvider>
    </>
  );
};
