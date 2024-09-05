"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/theme";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
