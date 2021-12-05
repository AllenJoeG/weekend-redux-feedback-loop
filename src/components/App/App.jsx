import React from 'react';
import axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


//HOOKS
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


//import Components
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';
import Admin from '../Admin/Admin.jsx';


function App() {
  //alias HOOKS
  const dispatch = useDispatch();

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

  //Function holds GET request dispatch DB rows to dbReducer
  const fetchDbForReducer = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('We received DB Rows', response);
      dispatch({
        type: 'HOLD_FEEDBACK_ROWS',
        payload: response
      })
    }).catch((error) => {
      console.log('GET request failed:', error);
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

            <Route exact path="/admin">
              <Admin />
            </Route>

          </Router>
        </Box>
      </div>
    </div>
  );
}

export default App;
