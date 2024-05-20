import React, { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L, { icon, popup } from 'leaflet';

import marker from "./assets/marker-icon-2x.png"
import Shadow from "./assets/marker-shadow.png"
import 'leaflet/dist/leaflet-src.js';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import "leaflet-control-geocoder"


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
        alert("The direction method cannot be performed. Please accept the location permission");
      }
    );
  }, []);

  return { loading, data };
}


const MarkerIcon =  L.icon({
  iconUrl: marker,
  shadowUrl: Shadow,

  iconSize:     [21, 38], // size of the icon
  iconAnchor:   [10, 43], // point of the icon which will correspond to marker's location
  popupAnchor:  [-1.3, -34] // point from which the popup should open relative to the iconAnchor
});


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
        icon: MarkerIcon,
        
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
