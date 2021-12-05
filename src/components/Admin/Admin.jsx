import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

//MUI stuff
import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Admin({fetchDbForReducer}) {

  useEffect(() => {
    console.log('in UseEffect')
    fetchDbForReducer();
  }, [])

  const feedbackHistory = useSelector((store) => store.dbReducer);
  console.log(feedbackHistory);


  return( 
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="right">Feeling</StyledTableCell>
            <StyledTableCell align="right">Understanding</StyledTableCell>
            <StyledTableCell align="right">Support</StyledTableCell>
            <StyledTableCell align="right">Comments</StyledTableCell>
            <StyledTableCell align="right">Flag Review?</StyledTableCell>
            <StyledTableCell align="right">Delete?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbackHistory.map((row) => {
            return <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{(row.date).slice(0, 10)}</StyledTableCell>
              <StyledTableCell align="right">{row.feeling}</StyledTableCell>
              <StyledTableCell align="right">{row.understanding}</StyledTableCell>
              <StyledTableCell align="right">{row.support}</StyledTableCell>
              <StyledTableCell align="right">{row.comments}</StyledTableCell>
              <StyledTableCell><Button variant="contained">{row.flagged ? 'Review!' : 'Flag!'}</Button></StyledTableCell>
              <StyledTableCell><Button> ❌ </Button></StyledTableCell>
            </StyledTableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}