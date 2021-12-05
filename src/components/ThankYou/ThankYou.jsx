import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PollIcon from '@mui/icons-material/Poll';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

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
      <Button variant="outlined" endIcon={<PollIcon />} onClick={handleClick}>New Survey!?</Button>
      <Box paddingBottom="10px"></Box>
      <Button variant="contained" endIcon={<SelfImprovementIcon />} color="success" onClick={handleAdmin}>See Feedback History</Button>
    </Box>
  )
}