import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect
} from 'react-router-dom'
import Report from './Report';
import ReportList from "./Reports.js"
import Me from "./Me.js"
import './style/App.scss'
import Form from './composeReport'
import Registration from "./registration";
import Authenticate from "./auth";
const loggedIn = localStorage.getItem('token');

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
                        <li className='navlist'><Link className='navlinks' to='/login'>Logga in</Link></li>
                    </ul>
                </div>
                <Route exact path='/' component={Me}/>
                <Route exact path='/reports' component={ReportList}/>
                <Route exact path='/reports/week/:week' component={Report}/>
                <Route exact path='/register' component={Registration}/>
                <Route exact path='/login' component={Authenticate}/>
                {!loggedIn && <>
                    <Route exact path='/compose' component={Form}/>
                    <Route exact path='/edit' component={Edit}/>
                    <Redirect to="/login"/>
                    </>}
                {loggedIn && <>
                    <Route path="/compose" component={Form} exact/>
                    <Route exact path='/edit' component={Edit}/>
                </>}
            </Router>
        )
    }
}

export default App;
