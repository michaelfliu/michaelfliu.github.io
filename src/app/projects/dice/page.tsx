"use client";

import { Canvas } from "@react-three/fiber";
import DiceScene from "./scene";
import { keyMap } from "./constants";
import { KeyboardControls } from "@react-three/drei";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { Box, Typography } from "@mui/material";

export default function Dice() {
  return (
    <Box position="relative" flexGrow={1}>
      <Box position="absolute" top="20px" left="20px" zIndex={10}>
        {keyMap.map(({ name, keys }) => (
          <Box key={name}>
            <Typography
              sx={{
                display: "inline-block",
                border: "2px solid black",
                borderRadius: "8px",
                height: "2em",
                aspectRatio: "1",
                textAlign: "center",
                lineHeight: "2em",
              }}
            >
              {keys[0]}
            </Typography>
            <Typography display="inline-block" paddingLeft="10px">{name}</Typography>
          </Box>
        ))}
      </Box>
      <Canvas>
        <Suspense>
          <Physics>
            <KeyboardControls map={keyMap}>
              <DiceScene />
            </KeyboardControls>
          </Physics>
        </Suspense>
      </Canvas>
    </Box>
  );
}
