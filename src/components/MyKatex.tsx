"use client";

import { Box, useTheme } from "@mui/material";
import Katex from "katex";
import { createContext, ReactNode, useContext, useMemo } from "react";

const _KatexContext = createContext({});

interface KatexContextProps {
  children?: ReactNode;
  macros?: { [key: string]: string };
}

export function KatexContext(props: KatexContextProps) {
  const macros = useMemo(() => ({...props.macros}), []);
  return <_KatexContext.Provider value={macros} {...props} />;
}

function KatexComponent(props: { math: string; inline: boolean }) {
  const theme = useTheme();
  const macros = useContext(_KatexContext);
  const renderedMath = useMemo(
    () =>
      Katex.renderToString(props.math, {
        displayMode: !props.inline,
        errorColor: theme.palette.error.main,
        macros: macros,
      }),
    [props.math]
  );
  return (
    <Box
      component={props.inline ? "span" : "div"}
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
