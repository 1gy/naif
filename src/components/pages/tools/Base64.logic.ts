import {
  atom,
  selector,
  useRecoilValue,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE,
  useSetRecoilState,
} from "recoil";
import { delay } from "../../../logics/wait";

// Types ===================================================

export type ConvertMode = "encode" | "decode";

// Atoms ===================================================

const convertModeState = atom<ConvertMode>({
  key: "ToolsPage.Base64.convertMode",
  default: "encode",
});

const inputTextState = atom<string>({
  key: "ToolsPage.Base64.inputText",
  default: "",
});

export const convertedTextState = selector({
  key: "ToolsPage.Base64.convertedText",
  get: async ({ get }) => {
    if (get(convertModeState) === "encode") {
      return await base64encode(get(inputTextState));
    } else {
      return await base64decode(get(inputTextState));
    }
  },
});

// Hooks ===================================================

export const useConvertMode = () => useRecoilValue(convertModeState);

export const useSetConvertMode = () => useSetRecoilState(convertModeState);

export const useInputText = () => useRecoilValue(inputTextState);

export const useSetInputText = () => useSetRecoilState(inputTextState);

// TODO: unstable api
export const useConvertedText = () =>
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(convertedTextState);

// Logics ==================================================

const base64encode = async (text: string): Promise<[boolean, string]> => {
  await delay(50);
  try {
    return [true, btoa(text)];
  } catch {
    return [false, ""];
  }
};

const base64decode = async (text: string): Promise<[boolean, string]> => {
  await delay(50);
  try {
    return [true, atob(text)];
  } catch {
    return [false, ""];
  }
};

// Constants ===============================================
