import styled, { css } from "styled-components";

export const Input = styled.input(
  ({ theme }) => css`
    padding: ${theme.space.s5} ${theme.space.s6};

    border: 1px solid ${theme.colors.gray[100]};

    background-color: ${theme.colors.white};

    &:focus {
      outline: none;

      border: 2px solid green;
    }
  `
);
