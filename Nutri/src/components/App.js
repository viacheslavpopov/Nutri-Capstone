import './../App.css';
import React from 'react';
import NavBar from './NavBar';
import SupplementControl from './SupplementControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './Help';
import Resources from './Resources';
import About from './About';

function App() {
    return (
        <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path='/help'>
                    <Help />
                </Route>
                <Route path='/resources'>
                    <Resources />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/'>
                    <SupplementControl />
                </Route>
            </Switch>
        </Router>
        </div>
    );
}

export default App;