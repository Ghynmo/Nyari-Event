import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function MapsAPI() {
    
    const mapStyles = {        
        height: "50vh",
        width: "50%"};

    const [maps, setmaps] = useState({
        latitude: null,
        longitude: null
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setmaps({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },
            function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }, [])

    return (
        <LoadScript
          googleMapsApiKey='AIzaSyC6PlAlaL-9Fz4O4KwoKxGAXnnMbuKxJO4'>
           <GoogleMap
             mapContainerStyle={mapStyles}
             zoom={13}
             center={{
                lat: maps.latitude, 
                lng: maps.longitude
                }}
           />
        </LoadScript>
     )
}
