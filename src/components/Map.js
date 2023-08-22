import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const Map = ({ driverName }) => {

  const [users, setUsers] = useState([]);
  const [position, setPos] = useState({ lat: -25.344, lng: 131.031 });

  useEffect(() => {
    fetch('http://localhost:8080/location')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const getUser = (u) => {
      users.map((user) =>
        user.name === u ? setPos({ lat: user.lat, lng: user.lng }) : console.log(1)
      );
    };
    getUser(driverName);
  }, [users,driverName]);
  
  useEffect(() => {
    console.log(position, '2');
  }, [position]);

  console.log(position);


  //const position = { lat: -25.344, lng: 131.031 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHYy5VJPQGHf7GBjpW3OTSuAEAfU59_es">
      <GoogleMap
        mapContainerStyle={{ height: '400px',width:'800px'}}
        zoom={4}
        center={position}
      >
      <Marker position={position}  />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;