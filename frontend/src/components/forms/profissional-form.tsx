import { useState } from "react";
import { z } from "zod";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { profileFormSchema, ProfileFormValues } from "../../lib/schemas/profileFormSchema"

const ProfileForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ProfileFormValues>({
    name: "",
    email: "",
    phone: "",
    about: "",
    locations: "",
    price: "",
    availability: "manha",
    category: "limpeza",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(`Arquivo selecionado: ${file.name}`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name!]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const validatedData = profileFormSchema.parse(formValues);
      console.log("Dados validados:", validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as { [key: string]: string });
        setFormErrors(errors);
      }
    }
  };

  const handleCancel = () => {
    setFormValues({
      name: "",
      email: "",
      phone: "",
      about: "",
      locations: "",
      price: "",
      availability: "manha",
      category: "limpeza",
    });
    setFormErrors({});
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        
        <FormField>
          <Label variant="body1">Seu nome:</Label>
          <StyledTextField
            name="name"
            placeholder="Digite seu nome"
            value={formValues.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
        </FormField>
        <FormField>
          <Label variant="body1">Seu e-mail:</Label>
          <StyledTextField
            name="email"
            placeholder="Digite seu email"
            value={formValues.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
        </FormField>
        <FormField>
          <Label variant="body1">Telefone:</Label>
          <StyledTextField
            name="phone"
            placeholder="Digite seu telefone"
            value={formValues.phone}
            onChange={handleChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
          />
        </FormField>
        <FormField>
          <Label variant="body1">Sua foto:</Label>
          <StyledUploadArea>
            <UploadIcon src="/images/cloud.svg" alt="Upload Icon" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <UploadLabel htmlFor="file-upload">
              <UploadTextBold>Clique para fazer o upload de sua foto.</UploadTextBold>
              <UploadTextLight>SVG, PNG, JPG ou GIF (max 800 x 400px)</UploadTextLight>
            </UploadLabel>
          </StyledUploadArea>
        </FormField>
        <FormField>
          <Label variant="body1">Apresente-se:</Label>
          <StyledTextField
            name="about"
            placeholder="Olá, meu nome é Ana Silva e ofereço serviços de limpeza residencial há mais de 5 anos..."
            value={formValues.about}
            onChange={handleChange}
            error={!!formErrors.about}
            helperText={formErrors.about}
          />
        </FormField>
        <FormField>
          <Label variant="body1">Locais de atuação:</Label>
          <StyledTextField
            name="locations"
            placeholder="Aldeota, Meireles, Guararapes, Messejana e Papicu"
            value={formValues.locations}
            onChange={handleChange}
            error={!!formErrors.locations}
            helperText={formErrors.locations}
          />
        </FormField>
        <FormField>
          <Label variant="body1">Preço por hora:</Label>
          <StyledTextField
            name="price"
            placeholder="R$ 100,00 (Serviços extras, valor a combinar)"
            value={formValues.price}
            onChange={handleChange}
            error={!!formErrors.price}
            helperText={formErrors.price}
          />
        </FormField>
        <FormField>
          <Label variant="body1">Galeria de fotos:</Label>
          <StyledUploadArea>
            <UploadIcon src="/images/cloud.svg" alt="Upload Icon" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <UploadLabel htmlFor="file-upload-gallery">
              <UploadTextBold>Clique para fazer o upload de sua foto.</UploadTextBold>
              <UploadTextLight>SVG, PNG, JPG ou GIF (max 800 x 400px)</UploadTextLight>
            </UploadLabel>
          </StyledUploadArea>
        </FormField>
        <FormField>
          <Label variant="body1">Horários de Disponibilidade:</Label>
          <StyledFormControl>
            <InputLabel id="horarios-label">Selecione os horários</InputLabel>
            <StyledSelect
              labelId="horarios-label"
              name="availability"
              value={formValues.availability}
              onChange={handleChange}
            >
              <MenuItem value="manha">Manhã</MenuItem>
              <MenuItem value="tarde">Tarde</MenuItem>
              <MenuItem value="noite">Noite</MenuItem>
              <MenuItem value="fins-de-semana">Fins de semana</MenuItem>
            </StyledSelect>
          </StyledFormControl>
        </FormField>
        <FormField>
          <Label variant="body1">Categoria:</Label>
          <StyledFormControl>
            <InputLabel id="categoria-label">Selecione uma categoria</InputLabel>
            <StyledSelect
              labelId="categoria-label"
              name="category"
              value={formValues.category}
              onChange={handleChange}
            >
              <MenuItem value="limpeza">Limpeza</MenuItem>
              <MenuItem value="jardinagem">Jardinagem</MenuItem>
              <MenuItem value="pintura">Pintura</MenuItem>
              <MenuItem value="reparos">Reparos</MenuItem>
            </StyledSelect>
          </StyledFormControl>
        </FormField>

        <ButtonWrapper>
          <StyledSaveButton type="submit" variant="contained">
            Salvar
          </StyledSaveButton>
          <StyledCancelButton type="button" variant="outlined" onClick={handleCancel}>
            Cancelar
          </StyledCancelButton>
        </ButtonWrapper>
      </form>
    </FormContainer>
  );
};

export default ProfileForm;

const FormContainer = styled.div`
  max-width: 1400px;
  margin: 7em auto;
  margin-left: 26em;
  padding: 4rem;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Label = styled(Typography).attrs({
  fontWeight: 600,
  color: theme.colors.black,
})`
  width: 120px; 
  margin-right: 1rem;
  text-align: right;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    padding: ${theme.space.s2};
    border-radius: 4px;
    width: 50rem;
    height: 4.0rem;
    margin-left: 12rem;
  }
     & .MuiFormHelperText-root {
    margin-left: 12rem; 
    margin-top: 0.4rem; 
  }
`;

const StyledFormControl = styled(FormControl)`
  margin-left: 12rem;
  width: 50rem;
`;

const StyledSelect = styled(Select)`
  & .MuiInputBase-root {
    padding: ${theme.space.s2};
    border-radius: 4px;
    height: 4.0rem;
  }
`;

const StyledUploadArea = styled.div`
  margin-left: 12rem;
  width: 50rem;
  height: 15rem;
  border: 2px dashed ${theme.colors.gray[200]};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative; 

  &:hover {
    background-color: ${theme.colors.gray[500]};
  `

const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.gray[300]};
  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
`;

const UploadTextBold = styled(Typography)`
  font-weight: bold;
  font-size:0.9rem; 
  margin-bottom: 4px; 
`;

const UploadTextLight = styled(Typography)`
  color: ${theme.colors.gray[200]}; 
  font-size: 0.7rem; 
`;

const ButtonWrapper = styled.div`
  margin-top:6rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem; 
`;

const StyledSaveButton = styled(Button)`
  width:15rem;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  
  &:hover {
    background-color: ${theme.colors.gray[300]};
  }
`;

const StyledCancelButton = styled(Button)`
  width:15rem;
  border-color: ${theme.colors.black};
  color: ${theme.colors.black};

  &:hover {
    background-color: ${theme.colors.gray[500]};
  }
`;
