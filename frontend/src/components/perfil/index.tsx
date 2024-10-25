"use client";

import styled, { css } from "styled-components";
import { Column } from "../column";
import { Row } from "../row";
import { theme } from "@/lib/theme";
import { Typography, TextField, IconButton } from "@mui/material";
import Image from "next/image";
import Estrelas from "@/assets/images/estrelas.png";
import PerfilPlaceholder from "@/assets/images/woman1_placeholder.png";
import { useState } from "react";
import uploadFile from "@/assets/images/uploadFile.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function PerfilBody() {
  const userId = 32;
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      return response.data;
    },
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data.</div>;
  }

  return (
    <>
      <PerfilContainerPerfil>
        <Column width="100%" height="100%">
          <Row
            width="100%"
            height="182px"
            backgroundColor="#AAE6BB"
            borderRadius={theme.space.s3}
          />
          <Row
            width="900px"
            height="386px"
            position="absolute"
            top="116px"
            left="186px"
          >
            <Column mr={theme.space.s7}>
              <CircularImage
                src={imagePreview || PerfilPlaceholder}
                alt="Descrição da imagem"
                width={170}
                height={170}
                style={{
                  marginBottom: theme.space.s7,
                }}
              />
              <Typography
                fontSize={14}
                fontWeight={600}
                mb={theme.space.s7}
                align="left"
                mt="20px"
                ml={theme.space.s5}
              >
                Seu nome
              </Typography>

              <Typography
                fontSize={14}
                fontWeight={600}
                mb={theme.space.s7}
                align="left"
                mt="20px"
                ml={theme.space.s5}
              >
                Seu e-mail
              </Typography>
            </Column>
            <Column width="100%">
              <Typography
                fontSize={20}
                fontWeight={600}
                mt="116px"
                mb={theme.space.s1}
              >
                {user.name}
              </Typography>
              <Row
                mb={theme.space.s8}
                width="100%"
                justifyContent={"space-between"}
              >
                <Typography fontSize={12} fontWeight={200} color="#333333">
                  Atualize sua foto e personalize suas informações pessoais
                </Typography>

                <Image src={Estrelas} alt="estrelas-rating" />
              </Row>
              <TextField
                label=""
                defaultValue={user.name}
                sx={{ width: "100%", mb: theme.space.s5 }}
              />
              <TextField
                label=""
                defaultValue={user.email}
                disabled
                sx={{ width: "100%", mb: theme.space.s3 }}
              />
            </Column>
          </Row>

          <Row
            position="absolute"
            top="500px"
            width="96%"
            height="1px"
            backgroundColor="#F2F2F2"
          />

          <Row
            position="absolute"
            top="522px"
            left="194px"
            width="892px"
            height="254px"
          >
            <Column width="170px" marginRight={theme.space.s10}>
              <Typography
                ml={theme.space.s4}
                fontSize={14}
                fontWeight={600}
                mt={theme.space.s2}
                mb={theme.space.s2}
              >
                Sua foto
              </Typography>
              <Typography
                ml={theme.space.s4}
                fontSize={12}
                fontWeight={200}
                mb={theme.space.s2}
                color="#333333"
                maxWidth="160px"
              >
                Essa é a foto que aparece em seu perfil
              </Typography>
            </Column>
            <Column
              mt={theme.space.s1}
              ml={theme.space.s2}
              width="95%"
              backgroundColor={theme.colors.white}
              borderRadius={theme.space.s3}
              border={"1.5px dashed #A2A2A2"}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={685}
                  height={242}
                  style={{
                    borderRadius: "12px",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}
                />
              )}
              <IconButton
                component="label"
                role={undefined}
                tabIndex={-1}
                sx={{ width: 64, height: 64, position: "absolute" }}
              >
                <VisuallyHiddenInput
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  multiple
                />
                <Image src={uploadFile} alt="Icon" width={50} height={50} />
              </IconButton>
            </Column>
          </Row>
        </Column>
      </PerfilContainerPerfil>
    </>
  );
}

const CircularImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const PerfilContainerPerfil = styled.div(
  ({ theme }) => css`
    display: flex;
    position: relative;
    z-index: 2;
    background-color: ${theme.colors.white};
    width: 80%;
    height: 800px;
    padding-top: ${theme.space.s6};
    padding-left: ${theme.space.s7};

    top: 70px;
    left: 300px;
    alignitems: center;
  `
);
