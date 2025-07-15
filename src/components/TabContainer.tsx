"use client";

import { ReactNode, useState } from "react";
import { Box, Button, Divider, Paper } from "@mui/material";

export default function TabContainer({
  titles,
  children,
}: {
  titles: string[];
  children: ReactNode[];
}) {
  const [selectedChild, setSelectedChild] = useState<undefined | number>();

  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <Box display="flex">
          {titles.map((title, index) => (
            <Button
              key={index}
              onClick={() =>
                setSelectedChild(selectedChild == index ? undefined : index)
              }
              sx={{
                flexGrow: 1,
                color:
                  index == selectedChild ? "primary" : "primary.light",
              }}
            >
              {title}
            </Button>
          ))}
        </Box>
        {selectedChild == undefined ? undefined : <Divider />}
        <Box width="100%" overflow="scroll">
          {selectedChild == undefined ? undefined : children[selectedChild]}
        </Box>
      </Paper>
    </>
  );
}
