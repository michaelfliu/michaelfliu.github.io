import { Box, Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

interface MultiSelectButtonsProps {
  labels: string[];
  defaultLabels?: string[];
  onChange?: (selected: string[]) => void;
}

export default function MultiSelectButtons(props: MultiSelectButtonsProps) {
  const [selected, setSelected] = useState<string[]>(props.defaultLabels || []);

  useEffect(() => props.onChange && props.onChange(selected), [selected]);

  const handleClick = useCallback((label: string, ctrlHeld: boolean) => {
    setSelected((selected) =>
      selected.includes(label)
        ? selected.filter((v) => v !== label)
        : [...(ctrlHeld ? selected : []), label]
    );
  }, []);

  return (
    <Box display="flex" flexWrap="wrap">
      {props.labels.map((label) => (
        <Button
          key={label}
          variant={selected.includes(label) ? "contained" : "outlined"}
          onClick={(e) => handleClick(label, e.ctrlKey)}
          sx={{ flexGrow: 1 }}
        >
          {label.replace(' ', '\xa0')}
        </Button>
      ))}
    </Box>
  );
}
