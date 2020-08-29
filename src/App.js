import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Dasboard from './components/Dasboard';
// import India from './components/India'


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Dasboard}></Route>
        {/* <Route path="/india" component={India}></Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
