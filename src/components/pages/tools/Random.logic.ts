import { useCallback, useMemo } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

// Types ===================================================

export type Mode = "uuid" | "number";

// Atoms ===================================================

const modeState = atom<Mode>({
  key: "ToolsPage.Random.mode",
  default: "uuid",
});

const generateUuidTriggerState = atom<number>({
  key: "ToolsPage.Random.generateUuidTrigger",
  default: 0,
});

const generateUuidCountState = atom<number>({
  key: "ToolsPage.Random.generateUuidCount",
  default: 1,
});

// Hooks ===================================================

export const useMode = () => useRecoilValue(modeState);

export const useSetMode = () => useSetRecoilState(modeState);

export const useGenerateUuidCount = () =>
  useRecoilValue(generateUuidCountState);

export const useSetGenerateUuidCount = () =>
  useSetRecoilState(generateUuidCountState);

export const useGenerateUuid = () => {
  const [trigger, setTrigger] = useRecoilState(generateUuidTriggerState);
  const count = useGenerateUuidCount();
  const generate = useCallback(() => setTrigger((v) => v + 1), []);
  const uuid = useMemo<string>(() => {
    return generateUuid(count);
  }, [trigger, count]);

  return [uuid, generate] as const;
};

// Logics ==================================================

const generateUuid = (count: number): string => {
  return new Array(count).fill("").map(() => globalThis.crypto.randomUUID())
    .join(
      "\n",
    );
};

// Constants ===============================================
