import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";
import { useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import direction from "../get-directions-button.png"

export default function Map() {
  const google = window.google;
  const [libraries] = useState<"places"[]>(["places"]);
  const apiKey: string | undefined = process.env.REACT_APP_GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("Google Maps API key is missing");
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  var mapCenter = { lat: 33.7488, lng: -84.3877 };
  const [currentLocation, setCurrentLocation] = useState(mapCenter);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) => {
      const [lat, lng] = [res.coords.latitude, res.coords.longitude];
      console.log(lat, lng);
      setCurrentLocation({ lat, lng });
    });
  }, []);

  function initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLDivElement,
      {
        center: currentLocation,
        zoom: 9,
        mapTypeControl: false,
      }
    );
    interface Irequest {
      location: any;
      radius: number;
      type: string;
    }

    let request: Irequest = {
      location: currentLocation,
      radius: 1000,
      type: "car_repair",
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results: any, status: any) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log("okay");
      setPlaces(results);
    }
    console.log(results)
  }

  interface Iplace {
    id: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    name: string;
  }
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div id="map"></div>
      <header className="fs-2 text-center">
        Auto Shops In Your Area
        <Button 
   style={{ width: "9rem", height: "3rem", marginLeft: "15px", marginBottom: "15px"}} 
   className="fs-3"
   onClick={initMap}>Go</Button> 
  
      </header>
      <GoogleMap
        zoom={14}
        center={currentLocation}
        mapContainerClassName="map-container"
      >
        <MarkerF position={currentLocation} />
        {places.map((place: any, id) => (
          <MarkerF
            key={place.id}
            position={place.geometry.location}
            onClick={() => {
              alert(place.name);
              // place_id
            }}
          />
        ))}
      </GoogleMap>
      <Card border="Primary">
        <ListGroup variant="flush">
          <ListGroup.Item className="fs-5">
            {places.map((place:any, id) => 
            <div>{place.name}
            <img className=" " style={{width: 20, height: 20 }} src={direction} alt="direction-icon"/>
            </div>)}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
