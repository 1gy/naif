import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import type { VFC } from "react";
import { ToolsPage } from "./pages/tools/ToolsPage";
import { themes } from "../themes";
import { useThemeId } from "../hooks/settings";
import { StyleUtils } from "./parts/StyleUtils";
import { ErrorBoundary } from "./parts/ErrorBoundary";

const globalStyles = <GlobalStyles styles={{ body: { userSelect: "none" } }} />;

export const App: VFC = () => {
  return (
    <>
      <CssBaseline />
      {globalStyles}
      <StyleUtils />
      <ErrorBoundary>
        <Application />
      </ErrorBoundary>
    </>
  );
};

export const Application: VFC = () => {
  const themeId = useThemeId();
  return (
    <ThemeProvider theme={themes[themeId].theme}>
      <ToolsPage />
    </ThemeProvider>
  );
};
