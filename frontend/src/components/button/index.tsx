import styled, { css } from "styled-components";

import { decoration, display } from "@/lib/utils/styled";
import { DecorationProps, DisplayProps } from "@/lib/interface/styled";

interface ButtonProps extends DecorationProps, DisplayProps {
  variant?: string;
}

export const Button = styled.button<ButtonProps>(
  ({ theme, variant = "default" }) => css`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    font-size: 14px;
    font-weight: 600;

    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
    }

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
      border: 1px solid ${theme.colors.black};

      color: ${theme.colors.black};
      background-color: ${theme.colors.white};

      img {
        margin-right: ${theme.space.s2};
      }
    `}

    ${variant === "image_card" &&
      css`
        border: 1px solid #DADADA;
  
        color: ${theme.colors.black};
        background-color: ${theme.colors.white};

        font-size: 12px;
        font-weight: 550;
  
        img {
          margin-right: ${theme.space.s3};
          margin-left: ${theme.space.s5};
        }
        &:hover,
        &:focus {
        color: ${theme.colors.white};
        background-color:${theme.colors.black};
        border: 1px solid ${theme.colors.white};

        img {
          filter: invert(1);
          }
        }

      `}
      ${variant === "arrow_back_button" &&
        css`
            border: 1px solid #DADADA;
            color: ${theme.colors.black};
            background-color: ${theme.colors.white};
            border-radius: 6px;

            img{
              margin: ${theme.space.s3};
            }

            &:hover {
              box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              background-color: ${theme.colors.black};

              img {
                filter: invert(1);
              }
            }
        `}
  `,
    decoration,
    display
);
