import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

//MUI stuff
import { styled } from '@mui/material/styles';
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

export default function Admin({fetchDbForReducer, deleteFeedback, updateFeedback}) {

  useEffect(() => {
    console.log('in UseEffect')
    fetchDbForReducer();
  }, [])

  const feedbackHistory = useSelector((store) => store.dbReducer);
  console.log(feedbackHistory);


  return( 
    <TableContainer component={Paper}>
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
              <StyledTableCell align="left">🗓️ {(row.date).slice(0, 10)}</StyledTableCell>
              <StyledTableCell align="right">❣️ {row.feeling}</StyledTableCell>
              <StyledTableCell align="right">🧠 {row.understanding}</StyledTableCell>
              <StyledTableCell align="right">🫂 {row.support}</StyledTableCell>
              <StyledTableCell align="right">{row.comments} 💬</StyledTableCell>
              <StyledTableCell align="right"><Button onClick = {(e) => updateFeedback(row.id)} variant="contained">{row.flagged ? 'Review!' : 'Flag!'}</Button></StyledTableCell>
              <StyledTableCell align="right"><Button onClick = {(e) => deleteFeedback(row.id)} variant="outlined"> ❌ </Button></StyledTableCell>
            </StyledTableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}