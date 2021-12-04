import React from "react";
import { Button, Box } from "@mui/material";

//HOOKS
import { useSelector } from 'react-redux';


export default function Review() {
  const feedback = useSelector((store) => store.feedbackReducer);
  console.log(feedback);


  //Submit button should call POST function from App that submits full Reflection to Server/DB
    // .then clear the reviewReducer
    // and nav back to front page
  

  return(
    <Box>
      {feedback.map((feedback) => {
        return <div>
          <p>Feelings: {feedback.feeling}</p>
          <p>Understanding: {feedback.understanding}</p>
          <p>Support: {feedback.support}</p>
          <p>Comments: {feedback.comments}</p>
          </div>
      })}
      
      <Button>Submit Reflection!</Button>
    </Box>
  )
}