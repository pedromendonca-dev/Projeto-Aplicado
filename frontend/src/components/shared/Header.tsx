"use client";

import styled, { css } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Typography } from "@mui/material";
import axios from "axios";
import { Row } from "../row";
import { Column } from "../column";
import { theme } from "@/lib/theme";
import MultipleSelect from "../select-header";

export default function Header() {

  const { data : user, isLoading, isError } = useQuery({
    queryKey: ['user', 31],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3001/users/31');
      return response.data; 
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data.</div>;
  }

  
  return (
    <HeaderLayout>
      <FlexBox>
        <ContainerInfo>
            <Row display='flex' mt={theme.space.s1}>
            <Avatar alt="Foto de Perfil" src="M" sx={{ width:40, height: 40}} />
              <Column ml={theme.space.s2} mr={theme.space.s1}>
                <Typography fontSize={theme.space.s3} color={theme.colors.black} fontWeight={600} mb={theme.space.s1} letterSpacing={0.8}>
                  {user.name}
                </Typography>
                <Typography fontSize={10} color='#333333' fontWeight={500} letterSpacing={0.8}>
                  {user.email}
                </Typography>
            </Column>
            </Row>
        </ContainerInfo>
        <ContainerText>
          <Typography fontSize='20px' color={theme.colors.black} fontWeight={600} ml={theme.space.s1} >
              Categorias
          </Typography>
          <MultipleSelect />
        </ContainerText>
      </FlexBox>
    </HeaderLayout>
  );
}


const HeaderLayout = styled.header(
  ({ theme }) => css`
    grid-area: header;
    background-color: ${theme.colors.white};

    padding-right: ${theme.space.s5};
    padding-left: ${theme.space.s5};
    padding-top: ${theme.space.s5};
    padding-bottom: ${theme.space.s4};

    border-bottom: 2px solid ${theme.colors.gray[400]};
  `
);

const FlexBox = styled.div(
  ({ theme }) => css`
  display: flex;
  flex-direction: column;

  gap: 5px;

  height: 100%;
  width: 100%;

`
);


const ContainerInfo = styled.div(
  ({ theme }) => css`
  display: flex;
  justify-content: flex-end;

  height: 42px;
  width: 100%;

`
);

const ContainerText = styled.div(
  ({ theme }) => css`
  display: flex;
  flex: 1;

  width: 100%;

  align-items: flex-end;
  justify-content: space-between;


`
);