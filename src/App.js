import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom'
import Report from './Report';
import ReportList from "./Reports.js"
import Me from "./Me.js"
import './style/App.scss'
import Form from './composeReport'
import Registration from "./registration";
import Authenticate from "./auth";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className='topnav'>
                    <ul>
                        <li className='navlist'><Link className='navlinks' to='/'>Me-sida</Link></li>
                        <li className='navlist'><Link className='navlinks' to='/reports'>Redovisningar</Link></li>
                        <li className='navlist'><Link className='navlinks' to='/compose'>Skriv redovisningstext</Link></li>
                        <li className='navlist'><Link className='navlinks' to='/register'>Skapa användare</Link></li>
                        <li className='navlist'><Link className='navlinks' to='/authenticate'>Logga in</Link></li>
                    </ul>
                </div>
                <Route exact path='/' component={Me}/>
                <Route exact path='/reports' component={ReportList}/>
                <Route exact path='/reports/week/:week' component={Report}/>
                <Route exact path='/compose' component={Form}/>
                <Route exact path='/register' component={Registration}/>
                <Route exact path='/authenticate' component={Authenticate}/>
            </Router>
        )
    }
}

export default App;
