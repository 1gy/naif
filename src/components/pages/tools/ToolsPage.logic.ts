import { ReactNode, useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

// Types ===================================================

export type TabId = "random" | "base64" | "hash" | "settings";

export type TabDefinition = Record<TabId, {
  order: number;
  text: string;
  component: () => ReactNode;
}>;

// Atoms ===================================================

const selectedTabIdState = atom<TabId>({
  key: "ToolsPage.selectedTabId",
  default: "base64",
});

// Hooks ===================================================

export const useSelectedTabId = () => useRecoilValue(selectedTabIdState);

export const useSetSelectedTabId = () => useSetRecoilState(selectedTabIdState);

export const useSortedTabs = (tabItems: TabDefinition) =>
  useMemo(() => sortedTabs(tabItems), [tabItems]);

// Logics ==================================================

const sortedTabs = (tabItems: TabDefinition) => {
  return Object.entries(tabItems).sort(([, left], [, right]) =>
    left.order - right.order
  );
};

// Constants ===============================================