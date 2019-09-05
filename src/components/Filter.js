import React, { Component } from 'react';

class Filter extends Component {
    //This works now! sometimes you have to try the filter selection twice for some reason...
    render() {
        return (
            <div>
                
                <label htmlFor="filter">Filter By Type</label>
                <select 
                    name="filter" 
                    onChange={event => {
                        this.props.setFilter(event.target.value)
                        }}>
                    <option value="All" > All </option>
                    <option value="Assault">Assault</option>
                    <option value="Defender">Defender</option>
                    <option value="Support">Support</option>
                    
                </select>
                
            </div>
        );
    }
}

export default Filter;