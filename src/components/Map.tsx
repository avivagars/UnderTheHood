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



function initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 40.749933, lng: -73.98633 },
        zoom: 13,
        mapTypeControl: false,
      }
    );

const input = document.getElementById('searchTextField') as HTMLInputElement;
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
    types: ["establishment"],
  };
const autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.bindTo('bounds', map)

    const marker = new google.maps.Marker({
        map: map
    })

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace()
        console.log(place)

        if (!place.geometry || !place.geometry.location) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }
      
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport)
        } else {
            map.setCenter(place.geometry.location)
            map.setZoom(17)
        }
        marker.setPosition(place.geometry.location)
        marker.setVisible(true)

        interface Request {
            location: google.maps.LatLngLiteral;
            radius: string;
            type: string[];
        }
        
        
        

    })
}
window.addEventListener('load', initMap)

// This returns while map is being loaded
if (!isLoaded) return <div>Loading...</div>
return (
  <>
  <header className='fs-2 text-center'>Auto Shops In Your Area</header>
  {/* <Search />  */}
  <div>
    <input id="searchTextField" type="text"/>
   <button>Go</button> 
  </div>
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