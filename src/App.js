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
                <div className='main'>
                    <ul className='topnav'>
                        <li><Link to='/'>Me-sida</Link></li>
                        <li><Link to='/reports'>Redovisningar</Link></li>
                    </ul>

                    <hr/>
                    <Route exact path='/' component={Me}/>
                    <Route path='/reports' component={Reports}/>

                </div>
            </Router>
        )
    }
}

export default App;
