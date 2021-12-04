import React from "react";
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


export default function Understanding(){
//hold local state for the value of the Rating
const [understanding, setUnderstanding] = useState(2.5)

  const history = useHistory();
  const dispatch = useDispatch();
  
  //Event Handler for changing Rating Value
  const handleUnderstanding = (e) => {
    setUnderstanding(Number(e.target.value))
  };
  
  
//Button Handler for submit:
  //dispatches Rating value to Reducer w type 'UNDER_STANDING'
  //calls useHistory to navigate to /support
  const handleDispatchAndNav = () => {
    dispatch({
      type: 'UNDER_STANDING',
      payload: {understanding}
    })
    history.push('/support');
  }
  
  return(
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Our minds are constantly growing. How would you assess your understanding of today's content?</Typography>
      <StyledRating
        name="customized-color"
        value={understanding}
        onChange={handleUnderstanding}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.2}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />

      <Button onClick={handleDispatchAndNav}>Next</Button>
    </Box>


  );
};