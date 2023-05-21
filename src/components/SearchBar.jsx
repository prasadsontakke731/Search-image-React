import './SearchBar.css';
import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
  //  create state
  const [term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  // onChange()
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor=''>Enter Search Term</label>
        <input type='text' value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
