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
import { getAllUsers } from "@/lib/services/client/users";
import { useQuery } from "@tanstack/react-query";

const CategoriesTable = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { data: users } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: () => getAllUsers(),
    select: ({ data }) => data,
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDetailsClick = (id: string) => {
    router.push(`/detalhes/${id}`);
  };

  const filteredUsers = users?.filter(
    (user: any) => user.type_user === "professional"
  );

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
          {filteredUsers
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user: any) => (
              <TableRow
                key={user.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  fontSize: "0.85rem",
                }}
              >
                <TableCell component="th" scope="row">
                  <ImageStyle
                    alt="photo"
                    src={
                      user.photo ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&s"
                    }
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.espec?.slice(0, 18) + "..." || "N/A"}</TableCell>
                <TableCell align="center">
                  {user.work_place?.slice(0, 30) + "..." || "N/A"}
                </TableCell>
                <TableCell align="center">
                  {user.price ? `R$ ${user.price}` : "N/A"}
                </TableCell>
                <TableCell align="center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={Number(user.nota)}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleDetailsClick(user.id)}
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
        count={filteredUsers?.length || 0}
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
