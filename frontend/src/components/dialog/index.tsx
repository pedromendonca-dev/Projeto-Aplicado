"use client";

import * as React from "react";
import { Button } from "@/components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface AlertDialogProps {
  buttonTitle: string;
}

export default function AlertDialog({ buttonTitle }: AlertDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  return (
    <React.Fragment>
      <Button
        style={{ paddingLeft: 56, paddingRight: 56, marginLeft: 32 }}
        onClick={handleClickOpen}
      >
        {buttonTitle}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography fontSize={20} fontWeight={600}>
            Confirmar Agendamento
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography fontSize={16} fontWeight={500} mt={1}>
            Você está prestes a confirmar o agendamento para Limpeza
            Residencial. <br />
            Dia: 10/10/2024 <br />
            Pagamento: Pix
          </Typography>
        </DialogContent>
        <DialogActions sx={{ paddingBottom: 2, paddingX: 2 }}>
          <Typography marginRight={7} fontSize={16} fontWeight={550}>
            Deseja continuar com essa ação?
          </Typography>
          <Button variant="google" paddingX={8} onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            paddingX={32}
            autoFocus
            onClick={() => router.push("/contractservices")}
          >
            Aceitar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
