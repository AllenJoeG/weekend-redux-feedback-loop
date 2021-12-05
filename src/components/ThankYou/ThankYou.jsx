import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//HOOKS
import {useHistory} from 'react-router-dom';


export default function ThankYou() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/')
  }

  const handleAdmin = () => {
    history.push('/admin')
  }

  return(
    <Box>
      <Button onClick={handleClick}>New Survey!?</Button>
      <Button onClick={handleAdmin}>See Feedback History</Button>
    </Box>
  )
}