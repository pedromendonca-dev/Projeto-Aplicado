import { Typography } from "@mui/material";
import React from "react";
import styled, { css } from "styled-components";
import { sideMenuThings } from "@/lib/utils/constants/constants";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Aside = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <AsideLayout>
      <FlexBox>
        <Typography
          fontWeight={600}
          fontSize={16}
          marginLeft="16px"
          marginTop="12px"
          marginBottom="20px"
          lineHeight={1.5}
        >
          Domestify
        </Typography>
        {sideMenuThings.map((links) => (
          <NavItem
            key={links.path}
            onClick={() => handleNavigate(links.path)}
            isActive={pathname === links.path}
          >
            <Image
              style={{ marginRight: 24 }}
              src={links.icon}
              alt={links.name}
            />
            {links.name}
          </NavItem>
        ))}
      </FlexBox>
    </AsideLayout>
  );
};

const AsideLayout = styled.aside(
  ({ theme }) => css`
    grid-area: sidemenu;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    padding: 1.25rem;
    border-right: 2px solid ${theme.colors.gray[400]};
  `
);

const FlexBox = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;
  `
);

const NavItem = styled(
  ({
    isActive,
    ...rest
  }: { isActive: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...rest} />
  )
)<{ isActive: boolean }>(
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
    margin-bottom: ${theme.space.s2};
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

export default Aside;
