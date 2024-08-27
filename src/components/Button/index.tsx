import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: string;
}

export const Button = styled.button<ButtonProps>(
  ({ theme, variant = "default" }) => css`
    height: 50px;
    cursor: pointer;

    font-size: 12px;
    font-weight: 600;

    border-radius: 4px;

    &:focus {
      outline: none;
    }

    ${variant === "default" &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
    `}

    ${variant === "google" &&
    css`
      font-size: 12px;
      font-weight: 600;

      border: 1px solid ${theme.colors.black};

      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
    `}
  `
);
