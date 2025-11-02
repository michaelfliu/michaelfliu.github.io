import { Chip } from "@mui/material";

interface ItemLabelProps {
  title: string;
}

export default function ItemLabel({ title }: ItemLabelProps) {
  return <Chip label={title} size="small" variant="outlined" sx={{ borderRadius: 2 }} />;
}
