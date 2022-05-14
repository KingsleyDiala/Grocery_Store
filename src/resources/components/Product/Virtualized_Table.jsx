import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export const NutritionTable = ({ product }) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Dialy Need (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.amount}</TableCell>
              <TableCell align="right">{item.unit}</TableCell>
              <TableCell align="right">{item.percentOfDailyNeeds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
