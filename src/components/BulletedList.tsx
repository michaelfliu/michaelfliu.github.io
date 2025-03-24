import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function BulletedList({ children }: { children?: ReactNode }) {
  return (
    <Box component="ul" marginY="0.5em">
      {children}
    </Box>
  );
}
