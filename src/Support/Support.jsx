import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

//Hooks
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

//uses MUI Material STyles to add hover/filled color to rating box
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

//hold local state for the value of the Rating

//Write button handler that
  //dispatches Rating value to Reducer w type HAVING_FEELINGS
  //calls useHistory to navigate to /understanding


export default function Feeling(){

  
  
  return(
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />

      <Button>Next</Button>
    </Box>


  );
};