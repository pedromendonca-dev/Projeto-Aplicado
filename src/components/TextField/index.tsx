import styled, { css } from "styled-components";
import { Input } from "../Input"

interface TextFieldProps {
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const TextField = ({ label, inputProps }: TextFieldProps) => (
  <TextFieldContainer>
    {label && <StyledLabel>{label}</StyledLabel>}
    <Input {...inputProps} />
  </TextFieldContainer>
);

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label(
  ({ theme }) => css `
    margin-bottom: ${theme.space.s2};
    font-size: ${theme.space.s4};
    font-weight: 600;
    color: ${theme.colors.gray[200]};
  `
);