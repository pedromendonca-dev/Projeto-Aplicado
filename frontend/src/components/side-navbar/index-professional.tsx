"use client";

import React from 'react';
import Image from "next/image";
import styled, { css } from "styled-components";
import { useRouter, usePathname } from 'next/navigation';
import { professionalMenuLinks } from '@/lib/utils/constants/constants';

const SideNavbarProfessional = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <SideNavbarProfessionalContainer>
      <Logo>Domestify</Logo>
      {professionalMenuLinks.map((link) => (
        <NavItem
          key={link.path}
          onClick={() => handleNavigate(link.path)}
          isActive={pathname === link.path}
        >
          <Image style={{ marginRight: 12 }} src={link.icon} alt={link.name} width={20} height={20} />
          {link.name}
        </NavItem>
      ))}
    </SideNavbarProfessionalContainer>
  );
};

const SideNavbarProfessionalContainer = styled.div(
  ({ theme }) => css`
    position: fixed;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.space.s4} ${theme.space.s4};
    background-color: ${theme.colors.white};
    border-right: 1px solid #DADADA;
  `
);

const Logo = styled.h1`
  margin: 24px 0 24px 24px;
  font-size: 1.0rem;
  font-weight: bold;
  color: #000;
`;

const NavItem = styled(({ isActive, ...rest }: { isActive: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...rest} />
))<{ isActive: boolean }>(
  ({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    width: calc(100% - 32px);
    padding: ${theme.space.s3} ${theme.space.s3}; // Ajusta o padding
    margin: 4px 16px;
    font-size: ${theme.space.s3};
    color: ${theme.colors.black};
    text-decoration: none;
    border-radius: ${theme.space.s2};
    font-weight: 600;
    transition: background-color 0.1s, color 0.1s;

    ${isActive &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
      img {
        filter: invert(1);
      }
    `}

    &:hover,
    &:focus {
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
      cursor: pointer;
      img {
        filter: invert(1);
      }
    }
  `
);

export default SideNavbarProfessional;
