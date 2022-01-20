import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(department, point) {
  return { department, point };
}

const rows = [
  createData('computer science', 159),
  createData('ba economics', 237),
  createData('ba english', 262),
  createData('bsc physics', 305),
  createData('bsc biochemistry', 356),
  createData('bsc microbiology', 356),
  createData('bsc biotechnology', 356),
  createData('bcom coperation', 356),
  createData('bcom ca', 356),

];

export default function DeptPointList() {
  return (
    <TableContainer component={Paper} sx={{width:500 ,m:5}}>
      <Table sx={{ width:500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell align="right">Point</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.department}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.department}
              </TableCell>
              <TableCell align="right">{row.point}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}