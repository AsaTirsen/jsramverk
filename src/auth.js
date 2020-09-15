import React, {Component} from "react";



export class Authenticate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div className="Registration">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <label className= "input-label" htmlFor="exampleInputEmail1">Emailadress</label>
                    <input type="email" className= "input" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    <br />
                    <label className= "input-label" htmlFor="message">Lösenord</label>
                    <input type="password" className= "input" autoComplete="current-password" name="pwd" value={this.state.password} onChange={this.onPwdChange.bind(this)} />
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        );
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onPwdChange(event) {
        this.setState({password: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = this.state.data;
        fetch('http://localhost:1337/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }
}

export default Authenticate;
