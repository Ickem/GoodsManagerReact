import React from 'react';
import './SearchBar.css';

export default function SearchBar({onChange, value}){
    return  <div className="search-bar">
        <label htmlFor="search">Search:</label>
        <input
            type="text"
            id="search"
            onChange={onChange}
            value={value}
        />
    </div>
}
