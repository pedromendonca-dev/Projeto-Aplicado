import Costumer from "@/assets/images/costumer.svg"
import Notification from "@/assets/images/notification.svg"
import Password from "@/assets/images/password.svg"
import { StaticImageData } from "next/image";

export type sideMenuType = {
    name: string,
    path: string,
    icon: StaticImageData,
}

export const sideMenuLinks = [
    { name: 'Meu Perfil', path: '/perfil', icon: Costumer },
    { name: 'Senha', path: '/senha', icon: Notification },
    { name: 'Notificações', path: '/notificacoes', icon: Password },
  ];


//  <NavItem onClick={(handleClick)} href="#perfil" autoFocus={(focus)}>
//   <Image style={{ marginRight: 24 }} src={Costumer} alt="Categorias" />  
//   Meu Perfil
// </NavItem>

// <NavItem href="#senha" style={{ marginLeft: '2px'}}>
// <Image style={{ marginRight: 22 }} src={Password} alt="senha" />
// Senha
// </NavItem>

// <NavItem href="#notificacoes">
// <Image style={{ marginRight: 14 }} src={Notification} alt="notificações" />
// Notificações
// </NavItem>