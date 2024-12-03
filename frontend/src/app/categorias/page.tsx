"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@mui/material";
import { Column } from "@/components";
import { theme } from "@/lib/theme";
import styled from "styled-components";
import axios from "axios";
import { CategoriaProps } from "@/lib/interface/categoria";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";

// Definindo a tipagem para o tema
interface ThemeProps {
  space: {
    s5: string;
    s7: string;
    s8: string;
  };
  colors: {
    white: string;
  };
}

// Estendendo os tipos do styled-components para incluir o tema
declare module "styled-components" {
  export interface DefaultTheme extends ThemeProps {}
}

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
    <Layout>
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
            onClick={() => router.push(`/categorias/detalhes/${category.id}`)}
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
    </Layout>
  );
}

const FlexBox = styled.div`
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
  padding: 3rem 2rem;
`;
