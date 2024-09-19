"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/lib/theme";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}
