import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom'
import ReportLink from "./Reports.js"
import Me from "./Me.js"
import './style/App.scss'
import Form from './composeReport'
import Registration from "./registration";
import Authenticate from "./auth";
import Report from './Report';



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
                <Route path='/reports' component={ReportLink}/>
                <Route path= {`/reports/week/${week}`} component={Report}/>
                <Route path='/compose' component={Form}/>
                <Route path='/register' component={Registration}/>
                <Route path='/authenticate' component={Authenticate}/>
            </Router>
        )
    }
}

export default App;
