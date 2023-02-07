import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import "./map.css";
import { useState, useMemo } from 'react'

export default function Map() {
// Loads the map using API KEY
const google = window.google;
// const [libraries ]= useState(["places"])
const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDwkDWZTrafBBdNISEOyo1eNyoKp71nriQ',
    // libraries: libraries
    
});
var atlanta = useMemo(() => ({lat:44, lng:-80}), []);


function initialize() {
    
}




// This returns while map is being loaded
if (!isLoaded) return <div>Loading...</div>
return (
  <>
  <header className='fs-2 text-center'>Auto Shops In Your Area</header>
  {/* <Search />  */}
  <body>
    <input id="searchTextField" type="text"/>
   <button>Go</button> 
  </body>
    <GoogleMap 
        zoom={9}
        center={atlanta} 
        mapContainerClassName='map-container'
    >
        <MarkerF position={atlanta}/>
    </GoogleMap>
   
    </>
    )
}