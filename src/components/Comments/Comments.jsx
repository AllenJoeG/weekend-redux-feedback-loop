import React from "react";
import TextField from '@mui/material/TextField';
import InsertComment from '@mui/icons-material/InsertComment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';

//Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Comments(){

//hold local state for the value of the Rating
const history = useHistory();


//Write button handler that
  //dispatches Rating value to Reducer w type 'COMMENTS_DONE'
  //calls useHistory to navigate to /understanding
  const handleDispatchAndNav = () => {
    history.push('/review');
  };

  return(
    <Box>
      <p>Quick thoughts and reflection on today?</p>
      <TextField
        id="input-with-icon-textfield"
        label="Comments!"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InsertComment />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button onClick={handleDispatchAndNav}>Review</Button>
    </Box>
  );
};