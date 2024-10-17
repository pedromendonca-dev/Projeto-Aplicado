import { SideNavbarContainer, NavLabel, NavItem } from './StyledComponents';

export const SideNavbar = ({ typeUser }) => (
  <SideNavbarContainer>
    <NavLabel>Domestify</NavLabel>

    {typeUser === 'professional' ? (
      <>
        <NavItem href="#proposals">Propostas</NavItem>
        <NavItem href="#profile">Perfil</NavItem>
      </>
    ) : (
      <>
        <NavItem href="#categories">Categorias</NavItem>
        <NavItem href="#services">Serviços contratados</NavItem>
        <NavItem href="#about">Meus agendamentos</NavItem>
      </>
    )}
  </SideNavbarContainer>
);
