import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom'
import Reports from "./Reports.js"
import Home from "./Me.js"


class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/reports'>Redovisningar</Link></li>
                    </ul>

                    <hr/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/reports' component={Reports}/>

                </div>
            </Router>
        )
    }
}

export default App;
