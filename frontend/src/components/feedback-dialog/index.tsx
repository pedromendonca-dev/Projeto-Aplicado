"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { feedbackFormSchema } from "@/lib/schemas/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/services/api/api-client";
import { FeedbackProps } from "@/lib/interface/feedback";
import toast from "react-hot-toast";
import axios from "axios";

interface FeedbackDialogProps {
  open: boolean;
  onClose: () => void;
  providerId: string;
  consumerId: string;
}

const RatingButton = styled(Button)(({ theme }) => ({
  minWidth: "48px",
  height: "48px",
  borderRadius: "50%",
  padding: 0,
  border: `1px solid ${theme.palette.grey[300]}`,
  "&:hover": {
    backgroundColor: "#333333",
    color: "#ffffff",
  },
  "&.selected": {
    backgroundColor: "#000000",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#333333",
    },
  },
}));

const RatingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "center",
  margin: theme.spacing(2, 0),
}));

const RatingLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));

const SendButton = styled(Button)`
  && {
    background-color: #000000;
    color: #ffffff;
    text-transform: none;

    &:hover {
      background-color: #333333;
    }

    &:disabled {
      background-color: #cccccc;
      color: #ffffff;
    }
  }
`;

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({
  open,
  onClose,
  providerId,
  consumerId,
}) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FeedbackProps>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      provider_id: providerId,
      consumer_id: consumerId,
      user_id: consumerId,
    },
  });

  const createReview = useMutation({
    mutationFn: async (data: FeedbackProps) => {
      console.log("Dados sendo enviados:", {
        rating: data.rating,
        comment: data.comment,
        provider_id: data.provider_id,
        consumer_id: data.consumer_id,
        user_id: data.consumer_id,
      });

      try {
        const response = await axios.post(
          "http://localhost:3001/reviews",
          data
        );
        console.log("Resposta do servidor:", response);
        return response;
      } catch (error) {
        console.error("Erro detalhado:", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Feedback enviado com sucesso!");
      handleClose();
    },
    onError: (error: any) => {
      console.error("Erro no mutation:", error?.response || error);
      toast.error(
        `Erro ao enviar feedback: ${
          error?.response?.data?.message || error?.message
        }`
      );
    },
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data: FeedbackProps) => {
    console.log("Formulário submetido!"); // Primeiro log
    console.log("Dados do formulário:", data); // Dados que estão sendo enviados

    // Verificar se rating é válido
    if (data.rating === 0) {
      toast.error("Por favor, selecione uma avaliação");
      return;
    }

    createReview.mutate(data, {
      onError: (error) => {
        console.error("Erro na mutação:", error);
        toast.error("Erro ao enviar feedback");
      },
    });
  };

  const currentRating = watch("rating");

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize={18} fontWeight={600}>
            Feedback de usúario
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Typography variant="subtitle1" alignSelf="flex-start" gutterBottom>
            Quão satisfeito(a) você está com o serviço oferecido/prestado?
          </Typography>

          <RatingContainer sx={{ mt: 4 }}>
            {([1, 2, 3, 4, 5] as const).map((value) => (
              <RatingButton
                key={value}
                variant="outlined"
                className={currentRating === value ? "selected" : ""}
                onClick={() => setValue("rating", value)}
              >
                {value}
              </RatingButton>
            ))}
          </RatingContainer>

          {errors.rating && (
            <Typography color="error" variant="caption">
              Selecione uma avaliação
            </Typography>
          )}

          <TextField
            multiline
            rows={3}
            fullWidth
            placeholder="Conte pra gente: como foi sua experiência?"
            onChange={(e) => setValue("comment", e.target.value)}
            variant="outlined"
            sx={{ mt: 4 }}
          />
        </DialogContent>

        <DialogActions sx={{ padding: 2 }}>
          <Button onClick={handleClose} variant="text" color="inherit">
            Cancelar
          </Button>
          <SendButton
            type="submit"
            variant="contained"
            disabled={createReview.isPending}
          >
            {createReview.isPending ? "Enviando..." : "Enviar"}
          </SendButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FeedbackDialog;
