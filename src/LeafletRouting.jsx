import React, { useState, useEffect } from 'react';
import L from 'leaflet';
// import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import { useMap } from 'react-leaflet';

function userNavigator() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setData(position);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        alert("The direction method can be perfom please Accept Location Permision");
      }
    );
  }, []);

  return { loading, data };
}

const LeafletRouting = (location) => {
  const { loading, data } = userNavigator();
  const map = useMap();

  useEffect(() => {
    if (!loading && data) {
      // Create a routing control and add it to the map
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(data.coords.latitude, data.coords.longitude),
          L.latLng(parseFloat(location.position[0]), parseFloat(location.position[1])),
        ],
        geocoder: L.Control.Geocoder.nominatim(),
        showAlternatives: false,
        reverseWaypoints: true,
        autoRoute: true,
        addWaypoints: false,
        routeWhileDragging: true,
        collapsible: true, // Make the itinerary collapsible
        draggableWaypoints: false,
        
      }).addTo(map);
      // // Invalidate size after adding the routing control
      map.invalidateSize();

      return () => map.removeControl(routingControl);
    }
  }, [loading, data, map]);




  if (loading) return <h2>Tunggu...</h2>;

  return null;
};

export default LeafletRouting;
