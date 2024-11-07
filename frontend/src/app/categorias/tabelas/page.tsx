"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  Avatar,
  Box,
  Rating,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "550",
  backgroundColor: "#ffffff",
  color: "#000000",
  fontSize: "12sp",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5",
  },
  "&:hover": {
    backgroundColor: "#eeeeee",
    cursor: "pointer",
  },
  marginBottom: "12px",
  "& td": {
    paddingTop: "16px",
    paddingBottom: "16px",
  },
}));

const FeatureTable = () => {
  const dummyData = [
    {
      id: 1,
      photo: "images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      name: "John Doe",
      workArea: "Software Development",
      specialization: "Frontend Development",
      pricePerHour: 75,
      rating: 4.5,
    },
    {
      id: 2,
      photo: "images.unsplash.com/photo-1438761681033-6461ffad8d80",
      name: "Jane Smith",
      workArea: "UI/UX Design",
      specialization: "Mobile Design",
      pricePerHour: 65,
      rating: 5,
    },
    {
      id: 3,
      photo: "images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Mike Johnson",
      workArea: "Backend Development",
      specialization: "Node.js",
      pricePerHour: 85,
      rating: 4,
    },
    {
      id: 4,
      photo: "images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sarah Wilson",
      workArea: "Data Science",
      specialization: "Machine Learning",
      pricePerHour: 95,
      rating: 4.8,
    },
    {
      id: 5,
      photo: "images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "David Brown",
      workArea: "DevOps",
      specialization: "Cloud Architecture",
      pricePerHour: 90,
      rating: 4.2,
    },
  ];

  return (
    <Paper
      sx={{
        width: "auto",
        overflow: "hidden",
        p: 1,
        ml: "72px",
        mt: "62px",
        mr: "72px",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ pl: 4 }}>Foto</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell>Especialização</StyledTableCell>
              <StyledTableCell>Área de serviço</StyledTableCell>
              <StyledTableCell>Preço - Hora</StyledTableCell>
              <StyledTableCell>Avalaliação</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <StyledTableRow key={row.id}>
                <TableCell sx={{ pl: 4 }}>
                  <Avatar
                    alt={row.name}
                    src={`https://${row.photo}`}
                    sx={{ width: 40, height: 40 }}
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.workArea}</TableCell>
                <TableCell>{row.specialization}</TableCell>
                <TableCell>${row.pricePerHour}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Rating
                      value={row.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" ml={1}>
                      ({row.rating})
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{ cursor: "pointer", color: "primary.main" }}
                    onClick={() => console.log(`Edit item ${row.id}`)}
                  >
                    Detalhes
                  </Typography>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dummyData.length}
        rowsPerPage={5}
        page={0}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        labelRowsPerPage="Linhas por página"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count}`
        }
      />
    </Paper>
  );
};

export default FeatureTable;
