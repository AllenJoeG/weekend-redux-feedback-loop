import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//uses MUI Material STyles to add hover/filled color to rating box
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function Support(){
//hold local state for the value of the Rating
  const [support, setSupport] = useState(2.5)
//Alias HOOKS
  const history = useHistory();
  const dispatch = useDispatch();
  
//Event Handler for RATING VALUE change
  const handleSupport = (e) => {
    setSupport(Number(e.target.value))
  };
  
  
//Button handler that
  //dispatches Rating value to Reducer w type 'SUPPORT_WARD_PLZ'
  //calls useHistory to navigate to /understanding
  const handleDispatchAndNav = () => {
    dispatch({
      type: 'SUPPORT_WARD_PLZ',
      payload: support
    });
    history.push('/comments');
  };
  
  return(
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">We're all Interdependent. How are you feeling supported today?</Typography>
      <StyledRating
        name="customized-color"
        value={support}
        onChange={handleSupport}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />

      <Button onClick={handleDispatchAndNav}>Next</Button>
    </Box>


  );
};