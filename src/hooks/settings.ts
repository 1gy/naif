import { useMemo } from "react";
import {
  atom,
  SetterOrUpdater,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { ThemeId, themes } from "../themes";
import { localStorageEffect } from "../logics/storage";

// Types ===================================================

// Atoms ===================================================

const themeIdState = atom<ThemeId>({
  key: "themeId",
  default: "akane",
  effects: [
    localStorageEffect("themeId"),
  ],
});

// Hooks ===================================================

export const useThemeId = (): ThemeId => useRecoilValue(themeIdState);

export const useSetThemeId = (): SetterOrUpdater<ThemeId> =>
  useSetRecoilState(themeIdState);

export const useSortedThemes = () => useMemo(() => sortedThemes(), [themes]);

// Logics ==================================================

const sortedThemes = () => {
  return Object.entries(themes).sort(([, left], [, right]) =>
    left.order - right.order
  );
};

// Constants ===============================================
