import React from "react";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

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
    </Box>
  );
};