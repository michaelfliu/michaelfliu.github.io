import { Typography } from "@mui/material";
import { ReactElement } from "react";

export default function PageTitle({
  children,
}: {
  children: ReactElement | string;
}) {
  return (
    <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
      {children}
    </Typography>
  );
}
