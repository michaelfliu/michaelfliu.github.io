import { ReactNode } from "react";
import { KatexContext } from "@/components/MyKatex";

interface NotesLayoutProps {
  children?: ReactNode;
}

const katexMacros = {
  "\\R": "\\mathbb R",
  "\\Z": "\\mathbb Z",
  "\\N": "\\mathbb N",
  "\\cX": "\\mathcal X",
  "\\abs": "\\left|#1\\right|",
  "\\norm": "\\left\\lVert#1\\right\\rVert",
  "\\inner": "\\left\\langle#1, #2\\right\\rangle",
  "\\set": "\\left\\{#1\\right\\}",
  "\\floor": "\\left\\lfloor#1\\right\\rfloor",
  "\\ceil": "\\left\\lceil#1\\right\\rceil",
  "\\ind": "\\mathbf{1}_{\\set{#1}}",
  "\\Prob": "\\mathbb{P}\\left[#1\\right]",
  "\\E": "\\mathbb{E}\\left[#1\\right]",
  "\\Var": "\\mathrm{Var}\\left[#1\\right]",
  "\\Cov": "\\mathrm{Cov}\\left[#1\\right]"
}

export default function NotesLayout(props: NotesLayoutProps) {
  return (
    <KatexContext macros={katexMacros}>
      {props.children}
    </KatexContext>
  );
}
