import * as React from 'react';
import { useRouter } from 'next/navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import TablePagination from '@mui/material/TablePagination';

function createData(
  title: string,
  date: string,
  status: string,
  category: string,
  categoryColor: string,
  action: string,
  id: number 
) {
  return { title, date, status, category, categoryColor, action, id };
}

const rows = [
  createData('Limpeza residencial em Messejana', '17/05', 'Finalizado', 'Limpeza residencial', '#165C84', 'Detalhes', 1),
  createData('Manutenção de jardim', '15/05', 'Cancelado', 'Jardinagem e paisagismo', '#678662', 'Detalhes', 2),
  createData('Reforma de cozinha de apartamento', '05/05', 'Finalizado', 'Construção e reforma', '#88785B', 'Detalhes', 3),
  createData('Mudança do bairro de Messejana p/ bairro Guar...', '01/05', 'Finalizado', 'Serviços de mudança', '#4F5885', 'Detalhes', 4),
  createData('Manutenção na parte elétrica de salão de beleza', '19/04', 'Finalizado', 'Reparo elétrico', '#278A83', 'Detalhes', 5),
];

const Servicetable = () => {
  const router = useRouter(); 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: '1400px',
        margin: '0 auto',
        marginTop: '7.0em',
        marginLeft: '26.0em',
      }}
    >
      <Table sx={{ minWidth: 650, fontSize: '0.9rem' }} aria-label="service table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Título</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Data</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Categoria</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '0.85rem' }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <Chip label={row.category} style={{ backgroundColor: row.categoryColor, color: '#FFF' }} />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => handleDetailsClick(row.id)}
                  sx={{ textTransform: 'none' }}
                >
                  {row.action}
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

export default Servicetable;
