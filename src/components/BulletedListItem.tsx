import { Typography } from "@mui/material";
import { ReactNode } from "react";

export default function BulletedListItem({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <Typography component="li" marginBottom={0}>
      {children}
    </Typography>
  );
}
