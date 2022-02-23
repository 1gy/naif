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
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};
