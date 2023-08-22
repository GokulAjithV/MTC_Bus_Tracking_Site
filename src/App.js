import React ,{ useState } from 'react';
import Map from './components/Map';
import Search from './components/Search';
import './App.css'

function App() {
  const [searchedName,setSearchedName] = useState(''); 

  const handleSearch = (name) => {
    setSearchedName(name);
  }

  return (
    <div className="app">
      <Search onNameSearch={handleSearch}/>
      <div className="map-container">
        <Map driverName={searchedName}/>
        </div>
    </div>
  )
}


export default App





// function App() {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSearch = () => {
//     setLoading(true);
//     fetch(`/api/search?name=${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setLoading(false);
//         if (data.error) {
//           setPhoneNumber('User not found');
//         } else {
//           setPhoneNumber(data.phoneNumber);
//         }
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error(error);
//       });
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter a name to search"
//       />
//       <button onClick={handleSearch} disabled={loading}>
//         Search
//       </button>
//       {loading ? <p>Loading...</p> : <p>Phone number: {phoneNumber}</p>}
//     </div>
//   );
// }

// export default App;
