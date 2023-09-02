type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css';

import { BsSearch } from 'react-icons/bs';
const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Find user:</h2>
      <p>Search GitHub user</p>
      <div className={classes.search_container}>
        <input
          type='text'
          placeholder='Type text here'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
