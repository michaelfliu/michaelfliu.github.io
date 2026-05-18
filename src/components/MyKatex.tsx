"use client";

import { Box, useTheme } from "@mui/material";
import Katex from "katex";
import React, { createContext, ReactNode, useContext, useMemo } from "react";

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

interface TypesetKatexProps {
  children?: ReactNode;
}

function typesetKatexInString(s: string) {
  const parts: ReactNode[] = [];
  let math = false;
  let startI = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "$" && s[i - 1] !== "\\") {
      if (i !== startI) {
        if (math) {
          parts.push(<IM key={i} m={s.substring(startI, i)} />);
        } else {
          parts.push(s.substring(startI, i));
        }
      }
      math = !math;
      startI = i + 1;
    }
  }
  if (math) {
    parts.push(<IM m={s.substring(startI)} />);
  } else {
    parts.push(s.substring(startI));
  }
  return parts;
}

function typesetKatexInNodeRecursively(node: ReactNode, key?: number): ReactNode {
  if (typeof node === "string") {
    return typesetKatexInString(node);
  } else if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return React.cloneElement(node, {
      children: typesetKatexInNodeRecursively(node.props.children),
      key: node.key || key
    });
  } else if (Array.isArray(node)) {
    return node.map(typesetKatexInNodeRecursively);
  } else {
    return node;
  }
}

export function TypesetKatex({ children }: TypesetKatexProps) {
  return typesetKatexInNodeRecursively(children);
}
