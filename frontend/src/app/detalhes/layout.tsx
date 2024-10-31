"use client";

import styled, { css } from "styled-components";
import Header from "@/components/shared/Header";
import Aside from "@/components/shared/Sidemenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BodyContainer>
      <Header />
      <Aside />
      <MainLayout>{children}</MainLayout>
    </BodyContainer>
  );
}

const BodyContainer = styled.div(
    
  ({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1rem;

    min-block-size: 100vh;
    min-block-size: 100dvh;

    display: grid;
    grid-template-columns: 273px 1fr;
    grid-template-rows: 180px 1fr;
    grid-template-areas:
      'sidemenu header'
      'sidemenu main';
  `
);

const MainLayout = styled.main(
  ({ theme }) => css`
    grid-area: main; 
    color: ${theme.colors.black};
    font-size: 1rem;
    background-color: ${theme.colors.blue[200]};
  `
);
