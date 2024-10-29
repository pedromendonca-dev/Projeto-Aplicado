"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Typography } from "@mui/material";
import { Column } from "@/components";
import { theme } from "@/lib/theme";
import styled, { css } from "styled-components";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CategoriaProps } from "@/lib/interface/categoria";

export default function MainBody() {
  const router = useRouter();

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/categorys");
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
    <>
      <FlexBox>
        {categories?.map((category: CategoriaProps) => (
          <Column
            key={category.id}
            height={172}
            width={252}
            borderRadius={8}
            backgroundColor={theme.colors.white}
            overflow={"hidden"}
            border="1.5px solid #CCCCCC"
          >
            <img
              src={category.image}
              alt={category.name}
              width={252}
              height={120}
              style={{
                filter: "brightness(0.6)",
                cursor: "pointer",
              }}
            />
            <Typography
              fontSize={12}
              fontWeight={100}
              color="#333333"
              alignSelf={"flex-start"}
              ml={theme.space.s5}
              mt={theme.space.s4}
            >
              {category.name}
            </Typography>
          </Column>
        ))}
      </FlexBox>
      <ButtonDiv>
        <Button
          variant="contained"
          onClick={() => {
            router.push("/categorias/criar");
          }}
        >
          Criar Categoria
        </Button>
      </ButtonDiv>
    </>
  );
}

const FlexBox = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: flex-start;
    padding-right: ${(props) => props.theme.space.s8};
    padding-left: ${(props) => props.theme.space.s8};
    padding-top: ${(props) => props.theme.space.s7};
    padding-bottom: ${(props) => props.theme.space.s5};
    height: 65%;
    width: 98%;
  `
);

const ButtonDiv = styled.div(
  ({ theme }) => css`
    display: flex;

    margin-top: 24px;
    margin-left: 44px;
    background-color: ${theme.colors.white};
    height: 56px;
    width: 180px;
  `
);
