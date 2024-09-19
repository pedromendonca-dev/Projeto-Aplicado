import styled, { css } from "styled-components";

import { decoration, display } from "@/lib/utils/styled";
import { DecorationProps, DisplayProps } from "@/lib/interface/styled";

export const Row = styled.div<DisplayProps & DecorationProps>(
  () => css`
    display: flex;
  `,
  decoration,
  display
);
