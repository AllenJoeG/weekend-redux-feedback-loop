import React from "react";
import { Button, Box } from "@mui/material";

//HOOKS
import { useSelector } from 'react-redux';


export default function Review() {

  //Submit button should call POST function from App that submits full Reflection to Server/DB
    // .then clear the reviewReducer
    // and nav back to front page
  

  return(
    <Box>
      <p>display summary from Reducer here</p>
      <Button>Submit Reflection!</Button>
    </Box>
  )
}