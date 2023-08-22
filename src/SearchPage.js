import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSearch = (e) => {
    setLoading(true)
    fetch(`/api/search?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        
        if(data.error){
          setPhoneNumber('User not found')
        } else {
          setPhoneNumber(data.phoneNumber);
        }
        
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error fetching data:', error);
        setPhoneNumber('Error fetching data. Please try again.');
      });
  };

  return (
    <div className="search-container">
      <h1>Search Bus</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search user"
        />
        <button type="submit" disabled = {loading}>Search</button>
        {loading ? <p>Loading...</p> : <p>Phone Number : {phoneNumber}</p>}
      </form>
    </div>
  );
};

export default SearchPage;