import React from "react";
import { useRouter } from "next/navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import TablePagination from "@mui/material/TablePagination";
import styled from "styled-components";

const ActionText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  cursor: pointer;
  font-weight: 500;
  margin: 0 8px;
  transition: color 0.3s;

  &:hover {
    color: ${({ color }) =>
      color === "#00A12D"
        ? "#00cc00"
        : color === "#DB0000"
        ? "#ff5c5c"
        : "darkblue"};
    text-decoration: underline;
  }
`;

function createData(
  title: string,
  date: string,
  status: string,
  category: string,
  categoryColor: string,
  id: number
) {
  return { title, date, status, category, categoryColor, id };
}

const rows = [
  createData("Limpeza residencial em Messejana", "17/05", "Pendente", "Limpeza residencial", "#165C84", 1),
  createData("Manutenção de jardim", "15/05", "Cancelado", "Jardinagem e paisagismo", "#678662", 2),
  createData("Reforma de cozinha de apartamento", "05/05", "Concluído", "Construção e reforma", "#88785B", 3),
  createData("Mudança do bairro de Messejana p/ bairro Guar...", "01/05", "Pendente", "Serviços de mudança", "#4F5885", 4),
  createData("Manutenção na parte elétrica de salão de beleza", "19/04", "Concluído", "Reparo elétrico", "#278A83", 5),
  createData("Reforma de cozinha de apartamento", "05/05", "Concluído", "Construção e reforma", "#88785B", 6),
  createData("Mudança do bairro de Messejana p/ bairro Guar...", "01/05", "Pendente", "Serviços de mudança", "#4F5885", 7),
  createData("Manutenção na parte elétrica de salão de beleza", "19/04", "Concluído", "Reparo elétrico", "#278A83", 8),
  createData("Reparo na bicicleta do marquim", "19/04", "Concluído", "Reparo elétrico", "#278A83", 9),
  createData("Manutenção na garagem do seu zé", "19/04", "Concluído", "Reparo elétrico", "#278A83", 10),
  createData("Quebrar a parede da Juliana", "19/04", "Concluído", "Reparo elétrico", "#278A83", 11)
];

const ProfessionalTable = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [acceptedRows, setAcceptedRows] = React.useState<number[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDetailsClick = (id: number) => {
    router.push(`/contractservice/details/${id}`);
  };

  const handleAccept = (id: number) => {
    setAcceptedRows((prev) => [...prev, id]); 
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "1400px",
        margin: "0 auto",
        marginTop: "7.0em",
        marginLeft: "26.0em",
      }}
    >
      <Table sx={{ minWidth: 650, fontSize: "0.9rem" }} aria-label="professional service table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Data</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Categoria</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }, fontSize: "0.85rem" }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <Chip label={row.category} style={{ backgroundColor: row.categoryColor, color: "#FFF" }} />
              </TableCell>
              <TableCell align="center">
                {acceptedRows.includes(row.id) ? (
                  <ActionText color="blue" onClick={() => alert("Entrar em contato")}>Entrar em contato</ActionText>
                ) : (
                  <>
                    <ActionText color="#00A12D" onClick={() => handleAccept(row.id)}>Aceitar</ActionText>
                    <ActionText color="#DB0000" onClick={() => alert("Recusar proposta")}>Recusar</ActionText>
                  </>
                )}
                <ActionText color="blue" onClick={() => handleDetailsClick(row.id)}>Detalhes</ActionText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ProfessionalTable;
