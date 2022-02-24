import { Theme, useMediaQuery } from "@mui/material";

export const useIsPc = () =>
  useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
