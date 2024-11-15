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

import { theme } from "@/lib/theme";

interface FeedbackDialogProps {
  open: boolean;
  onClose: () => void;
}

type RatingValue = 1 | 2 | 3 | 4 | 5 | null;

const RatingButton = styled(Button)(({ theme }) => ({
  minWidth: "48px",
  height: "48px",
  borderRadius: "50%",
  padding: 0,
  border: `1px solid ${theme.palette.grey[300]}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  "&.selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
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
    background-color: "#000000";
    color: "#ffffff";
    text-transform: none;

    &:disabled {
      background-color: "#ffffff";
      color: "#000000";
    }
  }
`;

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({ open, onClose }) => {
  const [rating, setRating] = useState<RatingValue>(null);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = (): void => {
    console.log({ rating, feedback });
    onClose();
  };

  const handleClose = (): void => {
    setFeedback("");
    setRating(null);
    onClose();
  };

  const getRatingLabel = (rating: RatingValue): string => {
    switch (rating) {
      case 1:
        return "Pessimo";
      case 2:
        return "Ruim";
      case 3:
        return "Bom";
      case 4:
        return "Muito Bom";
      case 5:
        return "Excelente";
      default:
        return "Selecione a qualidade de serviço";
    }
  };

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

      <DialogContent>
        <Typography variant="subtitle1" alignSelf="flex-start" gutterBottom>
          Quão satisfeito(a) você está com o serviço oferecido/prestado?
        </Typography>

        <RatingContainer sx={{ mt: 4 }}>
          {([1, 2, 3, 4, 5] as const).map((value) => (
            <RatingButton
              key={value}
              variant="outlined"
              className={rating === value ? "selected" : ""}
              onClick={() => setRating(value)}
            >
              {value}
            </RatingButton>
          ))}
        </RatingContainer>

        <RatingLabel variant="body2">{getRatingLabel(rating)}</RatingLabel>

        <TextField
          multiline
          rows={3}
          fullWidth
          placeholder="Conte pra gente: como foi sua experiência?"
          value={feedback}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFeedback(e.target.value)
          }
          variant="outlined"
          sx={{ mt: 4 }}
        />
      </DialogContent>

      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose} variant="text" color="inherit">
          Cancelar
        </Button>
        <SendButton
          onClick={handleSubmit}
          variant="contained"
          disabled={!rating}
        >
          Enviar
        </SendButton>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
