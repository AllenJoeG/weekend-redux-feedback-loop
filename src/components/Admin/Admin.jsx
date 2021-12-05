import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function Admin({fetchDbForReducer}) {

  useEffect(() => {
    console.log('in UseEffect')
    fetchDbForReducer();
  }, [])

  const feedbackHistory = useSelector((store) => store.dbReducer);
  console.log(feedbackHistory);


  return( 
    <Box>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Feeling</td>
            <td>Understanding</td>
            <td>Support</td>
            <td>Comments</td>
            <td>Delete?</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {feedbackHistory.map((row) => {
            return <tr key={row.id}>
              <td>{(row.date).slice(0, 10)}</td>
              <td>{row.feeling}</td>
              <td>{row.understanding}</td>
              <td>{row.support}</td>
              <td>{row.comments}</td>
              <td>checkplaceholder</td>
              <td><Button> ❌ </Button></td>
            </tr>
          })}
        </tbody>
      </table>
    </Box>
  );
}