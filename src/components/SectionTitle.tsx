import { Typography } from "@mui/material";
import { ReactNode } from "react";

export default function SectionTitle({ children }: { children?: ReactNode }) {
  return (
    <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
      {children}
    </Typography>
  );
}
