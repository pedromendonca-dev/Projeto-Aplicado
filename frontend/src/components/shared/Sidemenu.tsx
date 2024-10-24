

import React from 'react'
import styled, { css } from "styled-components";


const Aside = () => {
  return (
    <AsideLayout>
        xd
    </AsideLayout>
  )
}

const AsideLayout = styled.aside(
    ({ theme }) => css`
    grid-area: sidemenu;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    padding: 1.25rem;
    border-right: 2px solid #EFEFEF;
    `
  );

export default Aside