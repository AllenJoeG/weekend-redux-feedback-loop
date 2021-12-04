import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import Components
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
<Feeling/>
<Understanding />
<Support/>
<Comments/>

    </div>
  );
}

export default App;

{/* <Router>
<Route exact path "/">
  <p>It's time for REFLECTION!</p>
  <Button>Begin</Button>
</Route>

<Route exact path "/feeling">
  <Feeling />
</Route>

<Route exact path "/understanding">
  <Understanding />
</Route>

<Route exact path "/support">
  <Support />
</Route>

<Route exact path "/comments">
  <Comments />
</Route>

<Route exact path "/done">

</Route>
</Router> */}