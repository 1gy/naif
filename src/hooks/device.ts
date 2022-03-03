import { Theme, useMediaQuery } from "@mui/material";

export type Device = "phone" | "desktop";

export const useDevice = (): Device => {
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return matches ? "desktop" : "phone";
};
