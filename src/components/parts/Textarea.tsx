import { styled } from "@mui/material";
import { forwardRef, TextareaHTMLAttributes } from "react";

const StyledTextareaElement = styled("textarea")(({ theme }) => ({
  width: "100%",
  height: "100%",
  resize: "none",
  padding: "16.5px 14px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: theme.shape.borderRadius,
  font: "inherit",
  ":hover": {
    borderColor: theme.palette.text.primary,
  },
  ":focus": {
    outlineWidth: 2,
    outlineStyle: "solid",
    outlineColor: theme.palette.primary.main,
    borderColor: "transparent",
  },
}));

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <StyledTextareaElement
      sx={{ fontFamily: "monospace" }}
      {...props}
      spellCheck={false}
    />
  );
});
