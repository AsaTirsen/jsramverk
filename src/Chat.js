import React from 'react';
import {w3cwebsocket as W3CWebSocket} from "websocket";


const client = new W3CWebSocket('ws://127.0.0.1:1340');
const messages = [];

//const messageText = [];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUsers: [],
            userActivity: [],
            username: null,
            message: "Write  here"
        };
        this.onTextBoxStateChange = this.onTextBoxStateChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    logInUser = () => {
        const username = this.username.value;
        console.log(username)
        if (username.trim()) {
            const data = {
                username
            };
            this.setState({
                ...data
            }, () => {
                client.send(JSON.stringify({
                    ...data,
                    type: "userevent"
                }));
            });
        }
    }


    onTextBoxStateChange(event) {
        console.log(event.target.value)
        this.setState({message: event.target.value});
    }

    onEnter(event) {
        console.log(event.target.value)
        if (event.key === 'Enter') {
            this.setState({message: event.target.value}, () => {
                client.send(JSON.stringify({
                    type: "contentchange",
                    username: this.state.username,
                    content: this.state.message
                }));
            });
        }
    }

    //TODO

    // add time stamp



    componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            const stateToChange = {};
            if (dataFromServer.type === "userevent") {
                stateToChange.currentUsers = Object.values(dataFromServer.data.users);
                console.log("object values users")
            } else if (dataFromServer.type === "contentchange") {
                console.log("content change reaches server")
                stateToChange.message = dataFromServer.data.textBoxContent;
                console.log(stateToChange.message);
                messages.push(stateToChange.message);
                console.log(messages);
            }
            stateToChange.userActivity = dataFromServer.data.userActivity;
            this.setState({
                ...stateToChange
            });
        };
    }

    showLoginSection = () => (
        <div className="account">
            <div className="account__wrapper">
                <div className="account__card">
                    <div className="account__profile">
                        <p className="account__name">Hello, user!</p>
                        <p className="account__sub">Join to edit the document</p>
                    </div>
                    <input name="username" ref={(input) => {
                        this.username = input;
                    }} className="form-control"/>
                    <button type="button" onClick={() => this.logInUser()}
                            className="btn btn-primary account__btn">Join
                    </button>
                </div>
            </div>
        </div>
    )

    showTextBoxSection = () => (
        <div className="main-content">
                <div className="currentusers">
                    {this.state.currentUsers.map(user => (
                        <React.Fragment key={user.username}>
                            <li> id={user.username} className="userInfo"</li>
                        </React.Fragment>
                    ))}
                </div>
                <div className="messages">{messages.map((item, index) => {return  <p key={index}>{item + '\n'}</p>})}</div>
            <label className="input-label">
                Skriv ditt meddelande</label>
                <div className="new-message">
                    <input type="text" name="message" value={this.state.message}
                                                    onChange={this.onTextBoxStateChange}
                                                                                   onKeyPress={this.onEnter}/>
                </div>
            <div className="history-holder">
                <ul>
                    {this.state.userActivity.map((activity, index) => <li key={`activity-${index}`}>{activity}</li>)}
                </ul>
            </div>
        </div>
    )


    render() {
        const {
            username
        } = this.state;
        return (
            <React.Fragment>
                <div className="main">
                    {username ? this.showTextBoxSection() : this.showLoginSection()}
                </div>
            </React.Fragment>
        );
    }
}

export default Chat;
