"use client"

import React, { useRef, useState } from 'react';
import Image from "next/image";
import styled, { css } from "styled-components";
import { useRouter, usePathname } from 'next/navigation';
import { sideMenuLinks } from '@/lib/utils/constants/constants';







const SideNavbarPerfil = () => {

  const router = useRouter();

  const pathname = usePathname();

  const handleNavigate = ( path: string ) => {
    router.push(path);
  };



  return(
      <SideNavbarPerfilContainer >
        {sideMenuLinks.map((links) => (
          <NavItem
            key={links.path}
            onClick={() => handleNavigate(links.path)}
            isActive={pathname === links.path} >
              <Image style={{ marginRight: 24 }} src={links.icon} alt={links.name} />
              {links.name}
            </NavItem>
          ))}
      </SideNavbarPerfilContainer>
    )
};

const SideNavbarPerfilContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: flex;

    width: 300px;
    height: 836px;

    top: 70px;
    left: 0px;

    align-items: center;
    flex-direction: column;

    z-index: 3;
    padding: ${theme.space.s4} ${theme.space.s6};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};

    border-right: 1px solid #DADADA;
  `
);


const NavItem = styled(({ isActive, ...rest }: { isActive: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...rest} />
))<{ isActive: boolean }>(
  ({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${theme.space.s4} ${theme.space.s4};
    text-decoration: none;
    text-align: left;
    font-size: ${theme.space.s3};
    color: ${theme.colors.black};   
    transition: background-color 0.1s, color 0.1s;
    border-radius: ${theme.space.s2};
    margin-bottom: ${theme.space.s4};
    padding-left: ${theme.space.s6};
    font-weight: 600;

    ${isActive &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
      border: 1px solid ${theme.colors.white};
      img {
        filter: invert(1);
      }
    `}

    &:hover,
    &:focus {
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
      border: 1px solid ${theme.colors.white};
      cursor: pointer;
      img {
        filter: invert(1);
      }
    }
  `
);

export default SideNavbarPerfil