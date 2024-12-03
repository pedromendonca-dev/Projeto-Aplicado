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
import { Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import TablePagination from "@mui/material/TablePagination";
import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "@/lib/services/client/services";

const Servicetable = () => {
  const { data: services } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: () => getAllServices(),
    select: ({ data }) => data,
  });

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

  const handleDetailsClick = (id: number) => {
    router.push(`/detalhes/servico/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ fontSize: "0.9rem", width: "100%" }}
        aria-label="service table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Data
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Categoria
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((service: any) => (
              <TableRow
                key={service.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  fontSize: "0.85rem",
                }}
              >
                <TableCell component="th" scope="row">
                  {service.title}
                </TableCell>
                <TableCell align="center">
                  {new Date(service.date_time).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">{service.status}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={service.category_id}
                    style={{
                      backgroundColor: "#165C84", // Mude para uma cor dinâmica, se necessário
                      color: "#FFF",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleDetailsClick(service.id)}
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
        count={services?.length || 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default Servicetable;
