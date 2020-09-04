import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom'
import Reports from "./Reports.js"
import Me from "./Me.js"
import './style/App.scss'


class App extends React.Component {
    render() {
        return (
            <Router>
                    <ul className='topnav'>
                        <li className='navlist'><Link className='navlinks' to='/'>Me-sida</Link></li>
                        <li className='navlist'><Link className='navlinks' to='/reports'>Redovisningar</Link></li>
                    </ul>
                 <Route exact path='/' component={Me}/>
                    <Route path='/reports' component={Reports}/>
            </Router>
        )
    }
}

export default App;
