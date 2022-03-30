import React, { useState } from 'react';

function Search({setSearchResults}) {

    const [search, setSearch] = useState('');

    const onSubmit = ev => {

        ev.preventDefault();
        setSearchResults(search);
        setSearch('');
    }

    return (
        <div className="search-component">
            <form onSubmit={onSubmit}>

                <input
                type="text"
                placeholder="Enter a city"
                value={search}
                onChange={ (e) => setSearch(e.target.value)}
                >
                    
                </input>
            </form>
        </div>
    )
}

export default Search;