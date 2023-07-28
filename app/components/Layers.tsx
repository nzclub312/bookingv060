import React, { useState } from 'react'
import { GeoJSON, useMapEvents, TileLayer, LayersControl, LayerGroup, Marker, Popup  } from 'react-leaflet'
import { geojson } from '../components/geo/geojson.js'

const Layers = () => {
  const [borderData, setBorderData] = useState([geojson])
  const map = useMapEvents({
    zoomend: () => {
      // Get the zoom level once zoom ended:
      console.log(map.getZoom())
    }, 
    moveend: () => {
      // Get bounds once move has ended:
      console.log(map.getBounds())
    }
  })

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer
            attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        {borderData.map((data) => {
          console.log(data)
          const geojson = data.features[0].geometry
          return (
            <LayersControl.Overlay key={state_name} checked name={state_name}>
              <GeoJSON data={geojson} pathOptions={{ color: 'blue' }} />
            </LayersControl.Overlay>
          )
        })}
      </LayersControl>
    </>
  )
}

export default Layers
