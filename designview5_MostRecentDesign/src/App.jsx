import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Transaction from './pages/Transaction.jsx';
import Wallet from './pages/Wallet.jsx';
import Investments from './pages/Investments.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Signout from './pages/Signout.jsx';


function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/"><Redirect to="/Dashboard" /></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
                <Route path="/Investments" component={Investments}></Route>
                <Route path="/Transaction" component={Transaction}></Route>
                <Route path="/Wallet" component={Wallet}></Route>
                <Route path="/Signout" component={Signout}></Route>
            </Router>

        </div>
    )
}

export default App;