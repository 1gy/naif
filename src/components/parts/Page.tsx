import { Box } from "@mui/material";
import type { ReactNode, VFC } from "react";

export type PageProps = {
  children: ReactNode;
};

export const Page: VFC<PageProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        // height: "100vh",
        height: "calc(var(--vh, 1vh) * 100)", // for phone
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};
