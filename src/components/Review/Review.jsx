import React from "react";
import { Button, Box } from "@mui/material";

//HOOKS
import { useSelector } from 'react-redux';


export default function Review({postFeedback}) {
  const feedback = useSelector((store) => store.feedbackReducer);
  //wrap the object in an array for mapping
  const arrayed = [feedback];

  //Submit button should call POST function from App that submits full Reflection to Server/DB
    // .then clear the reviewReducer
    // and nav back to front page
  const handleSubmit = () => {
    postFeedback(feedback);
  }

  return(
    <Box>
      {arrayed.map((arrayed) => {
        return <div>
          <p>Feelings: {arrayed.feeling}</p>
          <p>Understanding: {arrayed.understanding}</p>
          <p>Support: {arrayed.support}</p>
          <p>Comments: {arrayed.comments}</p>
          </div>
      })}
      
      <Button onClick={handleSubmit}>Submit Reflection!</Button>
    </Box>
  )
}