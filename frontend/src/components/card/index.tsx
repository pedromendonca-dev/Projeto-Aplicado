import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Column } from "../column";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <CardStyled>{children}</CardStyled>
);

const CardStyled = styled(Column)(
  ({ theme }) => css`
    padding: ${theme.space.s4};

    border: 0;
    border-radius: ${theme.space.s2};

    box-shadow: 10px 0px 20px 1px #4d4d4d;
    background: ${theme.colors.white};
  `
);