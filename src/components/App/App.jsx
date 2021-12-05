import React from 'react';
import axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


//HOOKS
import { HashRouter as Router, Route, Link } from 'react-router-dom';


//import Components
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';


function App() {

  //This function is passed down to Review Component. Brings up full feedback.
  const postFeedback = (feedback) => {
    console.log('postFeedback function hit. preparing to POST: ', feedback);
    //AXIOS post goes here

    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: feedback.feeling,
        understanding: feedback.understanding,
        support: feedback.support,
        comments: feedback.comments
      }
    }).then((res) => {
      console.log('POST success', res);
      
    }).catch((error) => {
      console.log('POST failed', error);
    });

  };


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
              {/* use a LINK for this initial nav */}
              <Link to='/feeling'><Button>Begin</Button></Link>
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
              <Review postFeedback={postFeedback} />
            </Route>

            <Route exact path="/thankyou">
              <ThankYou />
            </Route>
          </Router>
        </Box>
      </div>
    </div>
  );
}

export default App;
