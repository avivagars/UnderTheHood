export function Map () {
    return <div>Map</div>
}
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export function Map () {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey:"AIzaSyDtSR3jigN-LIReVeeO6lu4-wZt0a8tsgE" ,
//       });
    
//       if (!isLoaded) return <div>Loading...</div>;
//       return <Map />;
//     }
    
//     function Maps() {
//       const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    
//       return (
//         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//           <Marker position={center} />
//         </GoogleMap>
//       );
// }