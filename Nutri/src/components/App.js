import './../App.css';
import React from 'react';
import NavBar from './NavBar';
import SupplementControl from './SupplementControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './Help';
import Resources from './Resources';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';

function App() {
    return (
        <div className="App">
        <Router>
            <NavBar />
            <div className="background">
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
                    <Route path='/signin'>
                        <Signin />
                    </Route>
                    <Route path='/signup'>
                        <Signup />
                    </Route>
                    <Route path='/'>
                        <SupplementControl />
                    </Route>
                </Switch>
            </div>
        </Router>
        </div>
    );
}

export default App;