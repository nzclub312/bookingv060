'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import geoData from '../components/geo/geojson.json'
import { useRouter } from "next/navigation";
import { useCallback, useState, useMemo } from "react";

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon, point } from 'leaflet'
import { SafeUser } from "@/app/types";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});


// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};



interface MapProps {
  currentUser?: SafeUser | null
  center?: number[]
}

console.log(geoData)

const filteredStations = geoData.filter(gdata => gdata.address.country === "Italy")

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';



const Map: React.FC<MapProps> = ({ center }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
      <MapContainer 
        center={center as L.LatLngExpression || [42.585444, 13.257684]} 
        zoom={center ? 4 : 4 } 
        scrollWheelZoom={true} 
        className="h-[35vh] rounded-lg"
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
        <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
        >
        {filteredStations.map(gdata =>(
          <Marker key = {gdata.id} position={[gdata.gps.latitude, gdata.gps.longitude]}>
            <Popup position={[gdata.gps.latitude, gdata.gps.longitude]}>
              <div>
                <h1 onClick={gdata.url}>{"Название: " + gdata.name}</h1>
                <img src={gdata.image} />
                <p>{"Статус: " + gdata.status}</p>
                <p>{"Комнаты: " + gdata.stallCount}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>
      </MapContainer>
  );
}

export default Map