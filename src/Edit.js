import React from 'react';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: '',
                title: '',
                week: '',
                longtext: '',
            }
        }
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('fetch')
        fetch(`http://localhost:1337/reports/week/${this.props.match.params.week}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const report = (res.data[0])
                this.setState({
                    data: {
                        id: report.id,
                        title: report.title,
                        week: report.week,
                        longtext: report.longtext,
                    }
                });
            });
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
        fetch('http://localhost:1337/reports', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="input-label">
                    titel:
                    <textarea className="input" name="title" value={this.state.data.title}
                              onChange={this.handleTextareaChange}/>
                </label>
                <br/>
                <label className="input-label">
                    vecka:
                    <textarea className="input" name="week" value={this.state.data.week}
                              onChange={this.handleTextareaChange}/>
                </label>
                <br/>
                <label className="input-label">
                    text:
                    <textarea className="input" name="longtext" value={this.state.data.longtext}
                              onChange={this.handleTextareaChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Edit;

