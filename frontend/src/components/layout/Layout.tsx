"use client";

import styled from "styled-components";
import Aside from "../shared/Sidemenu";
import Header from "../shared/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  header?: string;
}

const Layout = ({ children, header = "Categorias" }: LayoutProps) => {
  return (
    <BodyContainer>
      <Header name={header} />
      <Aside />
      <MainLayout>{children}</MainLayout>
    </BodyContainer>
  );
};

const BodyContainer = styled.div(
  ({ theme }) => `
    color: ${theme.colors.black};
    font-size: 1rem;

    min-block-size: 100vh;
    min-block-size: 100dvh;

    display: grid;
    grid-template-columns: 273px 1fr;
    grid-template-rows: 180px 1fr;
    grid-template-areas:
      "sidemenu header"
      "sidemenu main";
  `
);

const MainLayout = styled.main(
  ({ theme }) => `
    grid-area: main;
    color: ${theme.colors.black};
    font-size: 1rem;
    background-color: ${theme.colors.blue[200]};
  `
);
export default Layout;
