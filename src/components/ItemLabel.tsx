import { Box, Typography } from "@mui/material";

interface ItemLabelProps {
  title: string;
}

export default function ItemLabel({ title }: ItemLabelProps) {
  return (
    <Box
      component="span"
      border={2}
      borderRadius={1}
      width="fit-content"
      lineHeight={1}
      px={0.4}
      mr="0.4em"
    >
      <Typography variant="caption" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
}
