import React, { Component } from 'react';

class BotFilter extends Component {
    render() { 
        const { handleFilter } = this.props
        // console.log(this.props)
        return ( 
            <div className='filter'>
                <label>
                    <strong>Filter:</strong>
                    <select className='filter-dropdown' onChange={handleFilter}>
                        <option value="">Filter By Type</option>
                        <option value="Assault">Assault</option>
                        <option value="Defender">Defender</option>
                        <option value="Support">Support</option>    
                    </select>
                </label>
            </div>
         );
    }
}
 
export default BotFilter;