"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Rating } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import styled from "styled-components";

function createData(
  photo: string,
  name: string,
  espec: string,
  area: string,
  price: string,
  avaliation: string,
  id: number
) {
  return { photo, name, espec, area, price, avaliation, id };
}

const rows = [
  createData(
    "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofissional_exemplo.d55196c6.png&w=256&q=75",
    "Ana Silva",
    "Limpeza residencial",
    "Messejana",
    "R$ 100,00",
    "10",
    1
  ),
  createData(
    "https://avatars.githubusercontent.com/u/66935004?v=4",
    "Marianne Gomes",
    "Limpeza residencial",
    "Messejana",
    "R$ 100,00",
    "10",
    1
  ),
  createData(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&s",
    "Pedro Lucas",
    "Limpeza residencial",
    "Messejana",
    "R$ 100,00",
    "10",
    1
  ),
  createData(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&s",
    "Lucas Rangel",
    "Limpeza residencial",
    "Messejana",
    "R$ 100,00",
    "10",
    1
  ),
  createData(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&s",
    "Caio Gomes",
    "Limpeza residencial",
    "Messejana",
    "R$ 100,00",
    "10",
    1
  ),
];

const CategoriesTable = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDetailsClick = () => {
    router.push(`/detalhes`);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ fontSize: "0.9rem", width: "100%" }}
        aria-label="service table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Foto</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Nome
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Especialização
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Área do serviço
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Preço/Hora
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Avaliação
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  fontSize: "0.85rem",
                }}
              >
                <TableCell component="th" scope="row">
                  <ImageStyle
                    alt="photo"
                    src={row.photo}
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.espec}</TableCell>
                <TableCell align="center">{row.area}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
                {/* <TableCell align="center">
                  <Chip
                    label={row.category}
                    style={{
                      backgroundColor: row.categoryColor,
                      color: "#FFF",
                    }}
                  />
                </TableCell> */}
                <TableCell align="center">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleDetailsClick()}
                    sx={{ textTransform: "none" }}
                  >
                    Detalhes
                  </Button>
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

const ImageStyle = styled.img`
  border-radius: 100%;
`;

export default CategoriesTable;
