import React from "react";
import { Button, Box } from "@mui/material";

//HOOKS
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function Review({postFeedback}) {
  const feedback = useSelector((store) => store.feedbackReducer);
  //wrap the object in an array for mapping
  const arrayed = [feedback];

  //alias HOOK
  const history = useHistory();

  //Submit button should call POST function from App that submits full Reflection to Server/DB
    // .then clear the reviewReducer (gonna do this at App level)
    // and nav back to front page or stretch to admin summary
  const handleSubmit = () => {
    postFeedback(feedback);
    history.push('/');
  };

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