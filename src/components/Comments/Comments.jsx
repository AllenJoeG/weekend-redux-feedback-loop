import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InsertComment from '@mui/icons-material/InsertComment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import PreviewIcon from '@mui/icons-material/Preview';

//Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Comments(){

  //hold local state for the value of the Rating
  const [comments, setComments] = useState('');
  //alias HOOKS
  const history = useHistory();
  const dispatch = useDispatch();

  //Event Handler for INPUT change
  const handleComments = (e) => {
    setComments(e.target.value);
  };

  //Write button handler that
  //dispatches Rating value to Reducer w type 'COMMENTS_DONE'
  //calls useHistory to navigate to /understanding
  const handleDispatchAndNav = () => {
    dispatch({
      type: 'COMMENTS_DONE',
      payload: comments
    })
    history.push('/review');
  };

  return(
    <Box>
      <p>Quick thoughts and reflection on today?</p>
      <TextField
        value={comments}
        onChange={handleComments}
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
      <Box paddingBottom="10px"></Box>
      <Button variant="outlined" endIcon={<PreviewIcon />} onClick={handleDispatchAndNav}>Review</Button>
    </Box>
  );
};