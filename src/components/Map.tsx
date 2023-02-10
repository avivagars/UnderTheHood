import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import "./map.css";
import { useState, useMemo, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap';


export default function Map() {
const google = window.google;
// const [libraries ]= useState("places")
const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDwkDWZTrafBBdNISEOyo1eNyoKp71nriQ',
    // libraries: libraries
    
});

    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(res => {
          const [lat, lng] = [res.coords.latitude, res.coords.longitude];
          console.log(lat, lng)
          setCenter({lat, lng});
          
      });
  };


// sets the center of my map to atlanta

// var atlanta = useMemo(() => ({lat:44, lng:-80}), []);
var mapCenter = {lat:44, lng:-80};
const [center, setCenter] = useState(mapCenter)


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

        interface Irequest {
            location: any;
            radius: number;
            type: string;
        }
        
        let request: Irequest = {
            location: place.geometry.location,
            radius: 500,
            type: 'car_repair'
        }
    //    const service = new google.maps.places.PlacesService(map)
    //     service.nearbySearch(request, callback)
    

    })
}

// function callback(results: google.maps.places.PlaceResult[]| null, status: google.maps.places.PlacesServiceStatus ) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//             var place = results[i];
//             createMarker(place);
//         }
//     }
// }

// function createMarker(place: google.maps.places.PlaceResult) {
//     const marker = new google.maps.Marker({
//         map: map,
//         // position: place.geometry.location
//     });

//     google.maps.event.addListener(marker, 'click', function () {
//        const infowindow = new google.maps.InfoWindow({
//         //   content: place.name
//         });
//         infowindow.open(map, marker);
//     });
// }
window.addEventListener('load', initMap)

// This returns while map is being loaded
if (!isLoaded) return <div>Loading...</div>
return (
  <>

  <header className='fs-2 text-center'>Auto Shops In Your Area
  <Button 
   style={{ width: "9rem", height: "3rem", marginLeft: "15px", marginBottom: "15px"}} 
   className="fs-3"
   onClick={getCurrentLocation}>Go</Button> 
  
  </header>
  
  {/* {zip.map((message, index) => {
  return (
   <div key={index} className="fs-4">
    {' '}
    <div>Zip: {message.zip}</div>
    </div>
  );
})} */}
  
    {/* <input id="searchTextField" type="text"/> */}
  
    <GoogleMap 
        zoom={9}
        center={center} 
        mapContainerClassName='map-container'
    >
        <MarkerF position={center}/>
    </GoogleMap>
    <Card border="Primary">
    <ListGroup variant="flush">  
    <ListGroup.Item>Search Results 1</ListGroup.Item>  
    <ListGroup.Item>Search Results 2</ListGroup.Item>  
    <ListGroup.Item>Search Results 3</ListGroup.Item>  
    <ListGroup.Item>Search Results 4</ListGroup.Item>  
  </ListGroup>  

    </Card>
    
    </>
    )
}