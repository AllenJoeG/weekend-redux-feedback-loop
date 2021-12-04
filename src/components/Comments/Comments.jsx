import React from "react";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';

//Hooks
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function Comments(){

  return(
    <Box>
      <p>Comments?</p>
      <TextField
        id="input-with-icon-textfield"
        label="Comments!"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button>Submit Reflection!</Button>
    </Box>
  );
};