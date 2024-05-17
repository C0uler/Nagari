import {useState, useEffect} from 'react'
import './Map.css'
import "leaflet/dist/leaflet.css"
import Loader from './Loader.jsx'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";


// import LeafletRouting from "./LeafletRouting.jsx";

import {MapContainer, TileLayer, Popup, Marker, useMap} from "react-leaflet";
  
  function fetchMapsData(Location) {
      console.log(Location);
        const [loading, setLoading] = useState([]);
        const [data, setData] = useState([]);
       
        const location = Location;
       
    
        const apiUrl = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&polygon_kml=1&addressdetails=1`;
    
    
        useEffect(() =>{
          setLoading(true);
          fetch(apiUrl)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            setData(responseJson);
            setLoading(false)
          })
          .catch(err => console.error(err));
        }, []);
       return {loading, data};
    }


function Maps(Location) {
    const {loading, data} = fetchMapsData(Location.location);
    const [open, setOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
 
     const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);
    console.log(Location);

    if(loading){
        return <Loader></Loader>
      }

    console.log(data[0]);
    // const position = [0,0];
    const position = [data[0].lat, data[0].lon];

  
  return (
    <>


    <div className='MapCointainers w-full h-full'>
      <MapContainer center={position} zoom={20} markerZoomAnimation={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup onClick={handleOpen}>
            <div>
              <div className='items-center justify-center h-full'>
                  <div className='row-span-1'>  {Location.location}</div>
                  <hr />
                  <div className='row-span-1'>{data[0].address.city},  {data[0].address.road}</div>
                  <a onClick={handleOpen}>See more</a>
                  
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>

    <Dialog size="xl" open={open} handler={handleOpen} >
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            size="sm"
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="-mt-px flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              Tania Andrew
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal"
            >
              @emmaroberts
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconButton
            variant="text"
            size="sm"
            color={isFavorite ? "red" : "blue-gray"}
            onClick={handleIsFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
          {console.log(position)}
          <a href={`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`} target="_blank">
            <Button color="gray" type='anchor' size="sm" >
              See From G-Map
            </Button>
          </a>
        </div>
      </DialogHeader>
      <DialogBody>
          <div id="map2">
            <MapContainer center={position} zoom={9} markerZoomAnimation={true} style={{ height: '32rem', width: '100%' } }>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
              </Marker>
              <LeafletRouting position={position}/>
            </MapContainer>
          </div>
      </DialogBody>
    </Dialog>   
  </>
  )
}

export default Maps



