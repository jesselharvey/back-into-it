import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { BlackjackHome} from './features/blackjack/BlackjackHome'
import { Blackjack } from './features/blackjack/Blackjack'
import './App.css';

function App() {
    return(
        <Router>
          <Switch>
            <Route exact path ="/home">
              <BlackjackHome/>
            </Route>
            <Route path="/game">
              <Blackjack/>
            </Route>
          </Switch>
        </Router>
    )
  
}

export default App;
