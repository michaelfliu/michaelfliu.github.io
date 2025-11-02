import { Paper, useTheme } from "@mui/material";

export interface ConditionalRenderListItemProps {
  children?: React.ReactNode;
  labels?: string[];
}

export default function ConditionalRenderListItem(
  props: ConditionalRenderListItemProps
) {
  const theme = useTheme();
  return <Paper sx={{ p: theme.spacing(1) }}>{props.children}</Paper>;
}
