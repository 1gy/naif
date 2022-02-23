import { Box, CircularProgress } from "@mui/material";
import { VFC } from "react";

export const LoadingIndicator: VFC = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.5)",
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
