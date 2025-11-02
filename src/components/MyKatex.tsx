"use client";

import { Box, useTheme } from "@mui/material";
import Katex from "katex";
import { createContext, ReactNode, useContext, useMemo } from "react";

const _KatexContext = createContext({});

interface KatexContextProps {
  children?: ReactNode;
  macros?: { [key: string]: string };
}

export function KatexContext({ children, macros }: KatexContextProps) {
  const _macros = useMemo(() => ({ ...macros }), [macros]);
  return (
    <_KatexContext.Provider value={_macros}>{children} </_KatexContext.Provider>
  );
}

function KatexComponent({ math, inline }: { math: string; inline: boolean }) {
  const theme = useTheme();
  const macros = useContext(_KatexContext);
  const renderedMath = useMemo(
    () =>
      Katex.renderToString(math, {
        displayMode: !inline,
        errorColor: theme.palette.error.main,
        macros: macros,
      }),
    [inline, macros, math, theme.palette.error.main]
  );
  return (
    <Box
      component={inline ? "span" : "div"}
      dangerouslySetInnerHTML={{ __html: renderedMath }}
    />
  );
}

export function M(props: { m: string }) {
  return <KatexComponent math={props.m} inline={false} />;
}

export function IM(props: { m: string }) {
  return <KatexComponent math={props.m} inline={true} />;
}
