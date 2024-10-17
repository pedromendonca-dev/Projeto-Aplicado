import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { TextField, Typography } from "@mui/material";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

import Form from "./base-form";
import { Row, Column, Button } from "@/components";

import { theme } from "@/lib/theme";
import type { AgendamentoForm } from "@/lib/schemas/agendamento";

const Container = styled.div(
  ({ theme }) => css`
    position: absolute;
    display: block grid;
    z-index: 1;

    top: 180px;
    left: 300px;

    height: calc(100% - 180px);
    width: calc(100% - 300px);

    background-color: ${theme.colors.blue[200]};
  `
);

const AgendamentoForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<AgendamentoForm>({
    mode: "all",
    //resolver: zodResolver(agendamentoFormSchema)
  });

  const agendamentoSubmit = (data: any) => {
    console.log(data);
  };

  //border-width: 1px; border-color: #C5C5C5; border-style: solid;
  return (
    <Container>
      <Form onSubmit={handleSubmit(agendamentoSubmit)}>
        <Row width="100%" height="66vh" alignItems="center">
          <Column
            width="80%"
            height="90%"
            border="1px solid #E7E7E7"
            paddingX={theme.space.s12}
            paddingY={theme.space.s10}
            marginX="s12"
            marginTop={theme.space.s11}
            backgroundColor={theme.colors.white}
          >
            <Column marginBottom="s3">
              <Typography
                fontSize={18}
                fontWeight={500}
                color={theme.colors.black}
              >
                Serviços
              </Typography>
            </Column>

            <Column height="100%" width="95%" marginBottom="s3">
              <FormControl fullWidth sx={{ mb: 2, width: "56vh" }}>
                <InputLabel>Selecione os serviços que deseja</InputLabel>
                <Select
                  label="Selecione os serviços que deseja"
                  {...register("categorias")}
                >
                  <MenuItem value="1">Limpeza Residencial</MenuItem>
                  <MenuItem value="2">Jardinagem e Paisagismo</MenuItem>
                  <MenuItem value="3">Construção e Reforma</MenuItem>
                </Select>
              </FormControl>
              <Typography
                fontSize={18}
                fontWeight={500}
                color={theme.colors.black}
                marginBottom="s4"
              >
                Título
              </Typography>
              <TextField
                label=""
                sx={{ mb: 2, mt: 1 }}
                {...register("titulo")}
              />
              <Typography
                fontSize={18}
                fontWeight={500}
                color={theme.colors.black}
                marginBottom="s4"
              >
                Informações gerais
              </Typography>
              <TextField
                id="info"
                multiline
                rows={5}
                defaultValue=""
                sx={{ mb: 2, mt: 2 }}
                {...register("info")}
              />
            </Column>
          </Column>
        </Row>

        <Row
          width="100%"
          height="16vh"
          justifyContent="flex-end"
          marginTop={theme.space.s5}
        >
          <Column width="51%">
            <Button mt="s2" width={"64vh"}>
              Continuar Agendamento
            </Button>
          </Column>
        </Row>
      </Form>
    </Container>
  );
};

export default AgendamentoForm;
