import React from 'react';
import {w3cwebsocket as W3CWebSocket} from "websocket";


const client = new W3CWebSocket('ws://127.0.0.1:1340');
let messages = {};
let previousMessages = [];

// let date = new Date();
// let timestamp = date.getDate() + "/" + (date.getMonth() +1) + " kl " + date.getHours() + ':' + date.getMinutes();
//

//const messageText = [];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUsers: [],
            userActivity: [],
            username: null,
            activeUser: "",
            message: "",
            timeStamp: ""
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
        if (event.key === 'Enter') {
            console.log(event.target.value)
            client.send(JSON.stringify({
                type: "contentchange",
                username: this.state.username,
                content: this.state.message,
            }))
            console.log(this.state.timeStamp)
        }
    }


    //TODO

    //Change message about joining chat...


    componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            const stateToChange = {};
            if (dataFromServer.type === "userevent") {
                stateToChange.currentUsers = Object.values(dataFromServer.data.users);
                // user = stateToChange.currentUsers.map(user => user.username);
            } else if (dataFromServer.type === "contentchange") {
                stateToChange.message = dataFromServer.data.textBoxContent;
                stateToChange.activeUser = dataFromServer.data.activeUser;
                stateToChange.timeStamp = dataFromServer.data.time;
                console.log(stateToChange.timeStamp)
                messages = {
                    message: stateToChange.message,
                    username: stateToChange.activeUser,
                    time: stateToChange.timeStamp
                };
                previousMessages.push(messages);
                console.log(messages.time);
                stateToChange.message = "";
            }
            stateToChange.userActivity = dataFromServer.data.userActivity;
            console.log(stateToChange.userActivity)
            this.setState({
                ...stateToChange
            });
        };
    }

    showLoginSection = () => (

                <div>
                    <div>
                        <h2 className="instruction">Enter your nickname</h2>
                    </div>
                    <input name="username" ref={(input) => {
                        this.username = input;
                    }} className="form-control"/>
                    <button type="button" onClick={() => this.logInUser()}
                            className="btn btn-primary account__btn">Join
                    </button>
                </div>
    )

    showTextBoxSection = () => (
        <div>
            <div>
                {this.state.currentUsers.map(user => (
                    <React.Fragment key={user.username}>
                        <li className="label">{user.username} joined the chat{" " + this.state.timeStamp}</li>
                    </React.Fragment>
                ))}
            </div>
            <div className="messages">
                {previousMessages.map((message, index) => (
                    <React.Fragment key={index}>
                        <li className="user">{message.username + " " + message.time}</li>
                        <li className="message">{message.message}</li>
                    </React.Fragment>))}
            </div>
            <label className="label">Skriv ditt meddelande</label>
            <div className="new-message">
                <input type="text" name="message" value={this.state.message}
                       onChange={this.onTextBoxStateChange}
                       onKeyPress={this.onEnter}/>
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
