import React, { Component } from 'react';

class BotSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSearch(event)}>
                    <input name="query" placeholder="Search" value={this.state.query} type="text" onChange={event => this.handleChange(event)}></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default BotSearch;