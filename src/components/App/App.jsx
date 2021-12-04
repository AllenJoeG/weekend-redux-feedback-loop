import React from 'react';
import axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


//HOOKS
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


//import Components
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';


function App() {

  //alias useHistory
  const history = useHistory();

  const handleBegin = () => {
    history.push('/feeling');
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    
      <div>
        <Box>
          <Router>
            <Route exact path="/">
              <p>It's time for REFLECTION!</p>
              <Button onClick={handleBegin}>Begin</Button>
            </Route>

            <Route exact path="/feeling">
              <Feeling />
            </Route>

            <Route exact path="/understanding">
              <Understanding />
            </Route>

            <Route exact path="/support">
              <Support />
            </Route>

            <Route exact path="/comments">
              <Comments />
            </Route>

            <Route exact path="/review">
              <Review />
            </Route>
          </Router>
        </Box>
      </div>
    </div>
  );
}

export default App;

{/* <Feeling/>
<Understanding />
<Support/>
<Comments/> */}