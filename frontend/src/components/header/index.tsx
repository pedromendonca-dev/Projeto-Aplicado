"use client"
import { Avatar } from "@mui/material";
import styled, { css } from "styled-components";
import MultipleSelect from "../select-header";

type HeaderProps = {
  //data: 
  headerTitle: string
}

// Adicionar e vincular os dados de perfil -> Header


const Header = ({ headerTitle } : HeaderProps) => (
  <HeaderContainer>
    <HeaderTitle>
      { headerTitle }
    </HeaderTitle>
    <AvatarDiv>
      <Avatar alt="Foto de Perfil" src="" sx={{ width:40, height: 40}} />
      <ProfileInfo>
        <AvatarNome>Marianne Gomes</AvatarNome> 
        <AvatarEmail>mariannegomes@gmail.com</AvatarEmail>
      </ProfileInfo>
    </AvatarDiv>

    <SelectorDiv>
      <MultipleSelect />
    </SelectorDiv>
  </HeaderContainer>
);

const HeaderContainer = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    top: 0;
    margin-left: 300px;

    height: 180px;
    width: calc(100% - 300px);
    padding: ${theme.space.s4} ${theme.space.s6};
    

    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    box-shadow: 0px 2px 1px rgb(216,216,216);


  `
);

const HeaderTitle = styled.p(
  ({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;

    margin-left: ${theme.space.s5};
    margin-bottom: ${theme.space.s4};

    text-align: left;
    color: ${theme.colors.black};
    font-size: ${theme.space.s5};
    font-weight: bold;
  `
);

const AvatarDiv = styled.div(
  ({ theme }) => css`
  position: fixed;
  display: flex;
  align-items:center;

  top: 0;
  right: 0;
  width: fit-content;
  height: 36px;

  padding: ${theme.space.s5} ${theme.space.s10};
  margin-top: ${theme.space.s5};
  `
);

const ProfileInfo = styled.div(
  ({ theme } ) => css`
  display: flex;
  flex-direction: column;
  margin-left: ${theme.space.s2};
  `
)

const AvatarNome = styled.p(
  ( { theme } ) => css`

  padding: ${theme.space.s1} ${theme.space.s1};

  font-size: ${theme.space.s3};
  color: ${theme.colors.black};
  font-weight: bold;
  
  `
);

const AvatarEmail = styled.p(
  ( { theme } ) => css`
  padding: ${theme.space.s1};
  
  font-size: ${theme.space.s2};
  color: ${theme.colors.black};
  `
);

const SelectorDiv = styled.div(
 ( { theme } ) => css`
 position: absolute;
 bottom: 0;
 right: 0;

 margin-right: ${theme.space.s7};
 margin-bottom: ${theme.space.s2};
 
 `
)



export default Header;