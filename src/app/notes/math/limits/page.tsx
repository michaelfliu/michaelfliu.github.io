"use client";
import { useState } from "react";
import { Box, styled, Typography, useTheme } from "@mui/material";

import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import ConditionalRenderList from "@/components/ConditionalRenderList";
import ConditionalRenderListItem from "@/components/ConditionalRenderListItem";
import MultiSelectButtons from "@/components/MultiSelectButtons";
import SectionTitle from "@/components/SectionTitle";
import { M, IM, TypesetKatex } from "@/components/MyKatex";

const PartTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  textDecoration: "underline",
}));

const LBL = {
  FN: "functions",
  SEQ: "sequences/series",
  MET: "metric spaces",
  PROB: "probability",
};

export default function LimitsPage() {
  const [visibleLabels, setVisibleLabels] = useState<string[]>([LBL.FN]);
  const theme = useTheme();
  return (
    <PageContainer>
      <TypesetKatex>
        <PageTitle>Everything I Know About Limits</PageTitle>
        <Box
          my={theme.spacing(1)}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <MultiSelectButtons
            labels={Object.values(LBL)}
            defaultLabels={visibleLabels}
            onChange={setVisibleLabels}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={theme.spacing(1)}>
          <SectionTitle>Definitions</SectionTitle>
          <ConditionalRenderList visibleLabels={visibleLabels}>
            <ConditionalRenderListItem labels={[LBL.FN]}>
              <p>
                In the following definitions, let $p \in \R$ be a point
                and $f(x) : \R \to \R$ be a function defined on some
                open interval left to be specified. Where appropriate,{" "}
                $x_0 \in \R$ is the endpoint of an interval on which{" "}
                $f$ is defined.
              </p>
              <PartTitle>Limits at a Point</PartTitle>
              <p>
                Let $f$ be defined on some open interval around, but
                not necessarily including $p$. We say that{" "}
                $L \in \R$ is the <i>limit</i> of $f$ as{" "}
                $x$ approaches $p$ if for any{" "}
                {"$\\epsilon > 0$"} there exists some $\delta {">"} 0${" "}
                so that for any $x \neq p$ and{" "}
                {"$\\abs{x - p} < \\delta$"} we have{" "}
                {"$\\abs{f(x) - L} < \\epsilon$"}.
              </p>
              <PartTitle>One-Sided Limits</PartTitle>
              <p>
                Let $f$ be defined on some open interval{" "}
                $(x_0, p)$. Then we say that $R \in \R$ is the{" "}
                <i>limit</i> of $f$ as $x$ approaches{" "}
                $p$ <b>from the left (or from below)</b> if for any{" "}
                {"$\\epsilon > 0$"} there exists some {"$\\delta > 0$"}{" "}
                so that for any {"$x < p$"} and {"$p - x < \\delta$"}{" "}
                we have {"$\\abs{f(x) - R} < \\epsilon$"}.
              </p>
              <p>
                Let $f$ be defined on some open interval{" "}
                $(p, x_0)$. Then we say that $L \in \R$ is the{" "}
                <i>limit</i> of $f$ as $x$ approaches{" "}
                $p$ <b>from the right (or from above)</b> if for any{" "}
                {"$\\epsilon > 0$"} there exists some {"$\\delta > 0$"}{" "}
                so that for any {"$x > p$"} and {"$x - p < \\delta$"}{" "}
                we have {"$\\abs{f(x) - L} < \\epsilon$"}.
              </p>
              <PartTitle>Limits at Infinity</PartTitle>
              <p>
                Let $f$ be defined on some interval{" "}
                $(x_0, \infty)$. Then we say that $L \in \R${" "}
                is the <i>limit</i> of $f$ as $x$ approaches{" "}
                $\infty$ if for any {"$\\epsilon > 0$"} there is
                some $x_\epsilon \in \R$ such that for all{" "}
                {"$x > x_\\epsilon$"} we have{" "}
                {"$\\abs{f(x) - L} < \\epsilon$"}
              </p>
              <p>
                Let $f$ be defined on some interval{" "}
                $(-\infty, x_0)$
                . Then we say that $L \in \R$ is the <i>limit</i> of{" "}
                $f$ as $x$ approaches $-\infty$ if
                for any {"$\\epsilon > 0$"} there is some{" "}
                $x_\epsilon \in \R$ such that for all{" "}
                {"$x < x_\\epsilon$"} we have{" "}
                {"$\\abs{f(x) - L} < \\epsilon$"}
              </p>
              <PartTitle>Continuity</PartTitle>
              <p>
                $f$ is <i>continuous</i> at point $p$ if
              </p>
              <M m="\lim_{x \to p} f(x) = f(p)" />
              <p>
                $f$ is continuous on an interval $(a, b)$ if
                it is continuous at every point $p \in (a, b)$.
                $f$ is continuous if it is continuous at every point on
                its domain.
              </p>
            </ConditionalRenderListItem>
            <ConditionalRenderListItem labels={[LBL.SEQ]}>
              <p>
                Let {"$X = \\set{x_n}$"} be a sequence of real numbers. We
                say that $L \in \R$ is the <i>limit</i> of $x${" "}
                as $n$ approaches $\infty$ and write{" "}
                {`\[ \lim_{n\to\infty} x_n = L \]`} if for any{" "}
                {"$\\epsilon > 0$"} there is an $n_0 \in \N$ such
                that for all {"$n > n_0$"} we have{" "}
                {"$\\abs{x_n - L} < \\epsilon$"}.
              </p>
            </ConditionalRenderListItem>
            <ConditionalRenderListItem labels={[LBL.MET]}>
              <p>
                The definition of the limit on a metric space $\cX${" "}
                with metric $d : \cX \times \cX \to \R$ mirrors those
                definitions for limits of regular functions and
                sequences/series. Instead of assuming{" "}
                {"$d(x, y) = \\abs{x - y}$"} as is the case for{" "}
                $\R$ , we allow $d$ to be an arbitrary metric.
              </p>
              <PartTitle>Functions</PartTitle>
              <p>
                Let $f$ be defined on some open interval around, but
                not necessarily including $p$. We say that{" "}
                $L \in \cX$ is the <i>limit</i> of $f$ as{" "}
                $x$ approaches $p$ if for any{" "}
                {"$\\epsilon > 0$"} there exists some {"$\\delta > 0$"}{" "}
                so that for any $x \neq p$ and{" "}
                {"$\\abs{x - p} < \\delta$"} we have{" "}
                {"$d(f(x), L) < \\epsilon$"}.
              </p>
              <PartTitle>Sequences</PartTitle>
              <p>
                Let {"$X = \\set{x_n}$"} be a sequence of elements in{" "}
                $\cX$. We say that $L \in \cX$ is the{" "}
                <i>limit</i> of $x$ as $n$ approaches{" "}
                $\infty$ and write
              </p>
              <M m="\lim_{n\to\infty} x_n = L" />
              <p>
                if for any {"$\\epsilon > 0$"} there is an{" "}
                $n_0 \in \N$ such that for all {"$n > n_0$"} we
                have {"$d(x_n, L) < \\epsilon$"}.
              </p>
            </ConditionalRenderListItem>
          </ConditionalRenderList>

          <SectionTitle>Limit Arithmetic</SectionTitle>
          <ConditionalRenderList visibleLabels={visibleLabels}>
            <ConditionalRenderListItem labels={[LBL.FN]}>
              <p>
                Let $c \in \R$ be a constant,{" "}
                {"$p \\in \\R \\cup \\set{\\infty, -\\infty}$"} be a point, and{" "}
                $f, g : \R \to \R$ be functions such that{" "}
                {"$\\lim_{x \\to p} f(x) = L_f$"} and{" "}
                {"$\\lim_{x \\to p} g(x) = L_g$"}. It is true that:
              </p>
              <M
                m="
                \begin{align}
                  \lim_{x \to p} [f(x) + g(x)] &= L_f + L_g \\
                  \lim_{x \to p} [cf(x)] &= cL_f \\
                  \lim_{x \to p} [f(x) \cdot g(x)] &= L_f \cdot L_g \\
                  \lim_{x \to p} \frac{f(x)}{g(x)} &= \frac{L_f}{L_g} &(L_g \neq 0) \\
                  \lim_{x \to p} f^c(x) &= L_f^c &(L_f > 0)
                \end{align}
              "
              />
            </ConditionalRenderListItem>
            <ConditionalRenderListItem labels={[LBL.SEQ]}>
              <p>
                Let $c \in \R$ be a constant,{" "}
                {"$\\set{x_n}, \\set{y_n}$"} be sequences such that{" "}
                {"$\\lim_{n \\to \\infty} x_n = L_x$"} and{" "}
                {"$\\lim_{n \\to \\infty} y_n = L_y$"}. It is true that:
              </p>
              <M
                m="
                \begin{align}
                  \lim_{n \to \infty} [x_n + y_n] &= L_x + L_y \\
                  \lim_{n \to \infty} [cx_n] &= cL_x \\
                  \lim_{n \to \infty} [x_ny_n] &= L_xL_y \\
                  \lim_{n \to \infty} \frac{x_n}{y_n} &= \frac{L_x}{L_y} &(L_y \neq 0) \\
                  \lim_{n \to \infty} x_n^c &= L_x^c &(L_x > 0)
                \end{align}
              "
              />
            </ConditionalRenderListItem>
          </ConditionalRenderList>

          <SectionTitle>Theorems</SectionTitle>
          <ConditionalRenderList visibleLabels={visibleLabels}>
            <ConditionalRenderListItem labels={[LBL.FN]}>
              TODO: Theorems for limits for functions
            </ConditionalRenderListItem>
            <ConditionalRenderListItem labels={[LBL.SEQ]}>
              TODO: Theorems for limits for sequences
            </ConditionalRenderListItem>
          </ConditionalRenderList>

          <SectionTitle>Convergence</SectionTitle>
          <ConditionalRenderList visibleLabels={visibleLabels}>
            <ConditionalRenderListItem labels={[LBL.FN]}>
              TODO: Convergence of limits for functions
            </ConditionalRenderListItem>
            <ConditionalRenderListItem labels={[LBL.SEQ]}>
              TODO: Convergence of limits for sequences
            </ConditionalRenderListItem>
            <ConditionalRenderListItem labels={[LBL.PROB]}>
              TODO: Convergence in distribution, probability, almost sure
            </ConditionalRenderListItem>
          </ConditionalRenderList>

          <SectionTitle>Relationships Between Limits</SectionTitle>
          <ConditionalRenderList visibleLabels={visibleLabels}>
            <ConditionalRenderListItem labels={[LBL.FN, LBL.SEQ]}>
              TODO: Relationship between functional and sequence limits
            </ConditionalRenderListItem>
          </ConditionalRenderList>
        </Box>
      </TypesetKatex>
    </PageContainer>
  );
}
