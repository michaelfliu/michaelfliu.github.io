import React from "react";

import { ConditionalRenderListItemProps } from "./ConditionalRenderListItem";
import { Divider, Tooltip } from "@mui/material";

interface ConditionalRenderListProps {
  children?:
    | React.ReactElement<ConditionalRenderListItemProps>
    | React.ReactElement<ConditionalRenderListItemProps>[];
  visibleLabels: string[];
}

function ItemsHiddenMessage(props: { n: number; hiddenLabels: string[] }) {
  return (
    <Tooltip title={"See: " + props.hiddenLabels.join(", ").toUpperCase()}>
      <Divider sx={{ color: "text.secondary" }}>
        {props.n} item{props.n > 1 ? "s" : ""} hidden
      </Divider>
    </Tooltip>
  );
}

export default function ConditionalRenderList(
  props: ConditionalRenderListProps
) {
  const visibleLabelsSet = new Set(props.visibleLabels);
  const filteredChildren: React.ReactNode[] = [];
  const listChildren =
    props.children === undefined
      ? []
      : Array.isArray(props.children)
      ? props.children
      : [props.children];
  let numHidden = 0;
  const hiddenLabels: Set<string> = new Set();
  for (let i = 0; i < listChildren.length; ++i) {
    const child = listChildren[i];
    if (
      child.props.labels === undefined ||
      visibleLabelsSet.intersection(new Set(child.props.labels)).size > 0
    ) {
      if (hiddenLabels.size > 0) {
        filteredChildren.push(
          <ItemsHiddenMessage
            key={`crl-hidden-${i}`}
            n={numHidden}
            hiddenLabels={[...hiddenLabels]}
          />
        );
        hiddenLabels.clear();
        numHidden = 0;
      }
      filteredChildren.push(child);
    } else {
      child.props.labels.forEach((label) => hiddenLabels.add(label));
      numHidden += 1;
    }
  }
  if (hiddenLabels.size > 0) {
    filteredChildren.push(
      <ItemsHiddenMessage
        key={`crl-hidden-end`}
        n={numHidden}
        hiddenLabels={[...hiddenLabels]}
      />
    );
  }
  return filteredChildren;
}
