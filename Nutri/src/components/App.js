import './../App.css';
import React from 'react';
import NavBar from './NavBar';
import SupplementControl from './SupplementControl';

function App() {
    return (
        <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route path='/'>
                    <SupplementControl />
                </Route>
                <Route path='/help'>
                    <Help />
                </Route>
                <Route path='/resources'>
                    <Resources />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch>
        </Router>
        </div>
    );
}

export default App;