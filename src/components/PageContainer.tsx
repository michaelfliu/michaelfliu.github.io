"use client"

import { Container } from "@mui/material";
import { ReactNode } from "react";

interface PageContainerProps {
  children?: ReactNode
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Container maxWidth="md" sx={{ pt: 4 }}>
      {children}
    </Container>
  )
}
