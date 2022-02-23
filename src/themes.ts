import { createTheme, Theme } from "@mui/material";
import { amber, green, lightBlue, pink, red } from "@mui/material/colors";

// Types ===================================================

export type ThemeId = "akane" | "chigusa" | "hisui" | "kohaku" | "sango";

export type ThemeDefinition = Record<ThemeId, {
  order: number;
  text: string;
  theme: Theme;
}>;

// Constants ===============================================

const sango = createTheme({
  palette: {
    primary: {
      main: pink[200],
    },
    secondary: {
      main: pink[100],
    },
  },
});

const hisui = createTheme({
  palette: {
    primary: {
      main: green[700],
    },

    secondary: {
      main: green[600],
    },
  },
});

const akane = createTheme({
  palette: {
    primary: {
      main: red[700],
    },

    secondary: {
      main: red[600],
    },
  },
});

const chigusa = createTheme({
  palette: {
    primary: {
      main: lightBlue[700],
    },

    secondary: {
      main: lightBlue[600],
    },
  },
});

const kohaku = createTheme({
  palette: {
    primary: {
      main: amber[700],
    },

    secondary: {
      main: amber[600],
    },
  },
});

export const themes: ThemeDefinition = {
  akane: {
    order: 0,
    text: "Akane",
    theme: akane,
  },
  chigusa: {
    order: 1,
    text: "Chigusa",
    theme: chigusa,
  },
  hisui: {
    order: 2,
    text: "Hisui",
    theme: hisui,
  },
  kohaku: {
    order: 3,
    text: "Kohaku",
    theme: kohaku,
  },
  sango: {
    order: 4,
    text: "Sango",
    theme: sango,
  },
};
