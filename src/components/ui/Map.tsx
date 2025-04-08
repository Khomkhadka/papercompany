import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define the center of your map (latitude and longitude)
const mapCenter = { lat: 27.854509012709283, lng: 82.67266259727623 }; // Example: San Francisco

// Define the container style for the map
const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Optional: Callback function when Google Maps script is loaded
  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAZA70sX47Mgxr-Ihw57SYSGFeBZ7dpHGM" // Replace with your Google Maps API Key
      onLoad={onLoad}
    >
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={15}
        >
          {/* Marker at the center */}
          <Marker position={mapCenter} />
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default Map;
