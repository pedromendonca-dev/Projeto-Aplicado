import Costumer from "@/assets/images/costumer.svg"
import Notification from "@/assets/images/notification.svg"
import Password from "@/assets/images/password.svg"
import { StaticImageData } from "next/image";
import Categorias from "@/assets/images/categorias.svg"
import Services from "@/assets/images/services.svg"
import MeuAgendamento from "@/assets/images/agendamento.svg"




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

  export const sideMenuThings = [
    { name: 'Categorias', path: '/categorias', icon: Categorias },
    { name: 'Serviços Contratados', path: '/contractservices', icon: Services },
    { name: 'Meus Agendamentos', path: '/agendamento/inicial', icon: MeuAgendamento },
  ]

  export const professionalMenuLinks = [
    {
      path: '/proposal',
      name: 'Propostas',
      icon: Notification, 
    },
    {
      path: '/my-profile',
      name: 'Meu Perfil',
      icon: Costumer, 
    },
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