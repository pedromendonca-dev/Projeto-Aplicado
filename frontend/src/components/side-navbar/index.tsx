import styled, { css } from "styled-components";

export const SideNavbar = () => (
  <SideNavbarContainer>
    <NavLabel>Domestify</NavLabel>


    <NavItem href="#categories">
      Categorias
    </NavItem>

    <NavItem href="#services">
      Serviços contratados
    </NavItem>

    <NavItem href="#about">
      Meus agendamentos
    </NavItem>

  </SideNavbarContainer>
);

const SideNavbarContainer = styled.div(
  ({ theme }) => css`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 3;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    padding: ${theme.space.s4} ${theme.space.s6};
    
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    box-shadow: 1px 0 1px rgba(0, 0, 0, 0.2);
  `
);

const NavLabel = styled.label(
  ({ theme }) => css`
    width: 100%;
    margin-top: ${theme.space.s4};
    margin-bottom: ${theme.space.s6};
    
    text-align: left;
    color: ${theme.colors.black};
    font-size: ${theme.space.s4};
  `
);

const NavItem = styled.a(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.space.s4} ${theme.space.s4};
    text-decoration: none;
    text-align: center;
    font-size: ${theme.space.s3};
    color: ${theme.colors.black};   
    transition: background-color 0.3s, color 0.3s;
    border-radius: ${theme.space.s2};
    margin-bottom: ${theme.space.s4};
    font-weight: bold;    

    &:hover, &:active {
      cursor: pointer;
      font-weight:bold; 
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
    }
  `
);