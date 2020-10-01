import React, {Component} from "react";
import {baseUrl} from "./base";

export class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                title: '',
                week:'',
                text: '',
            },
        };

        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTextareaChange(event) {
        this.setState({
            data: Object.assign({}, this.state.data, {
                [event.target.name]: event.target.value,
            }),
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state.data;
        console.log(data.title)
        console.log(data.week)
        console.log(data.text)
        fetch( baseUrl() + 'reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }


    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className= "input-label">
                    titel:
                    <textarea className= "input" name="title" value={this.state.data.title} onChange={this.handleTextareaChange}/>
                </label>
                <br/>
                <label className= "input-label">
                    vecka:
                    <textarea className= "input" name="week" value={this.state.data.week} onChange={this.handleTextareaChange}/>
                </label>
                <br/>
                <label className= "input-label">
                    text:
                    <textarea className= "input" name="text" value={this.state.data.text} onChange={this.handleTextareaChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;

