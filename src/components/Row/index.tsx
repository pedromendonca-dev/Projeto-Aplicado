import styled, { css } from 'styled-components'

import { DecorationProps, DisplayProps } from '@/interface/styled'

import { decoration, display} from '@/utils/styled'

export const Row = styled.div<DisplayProps & DecorationProps>(() => css`
    display: flex;
`,
    decoration,
    display
)