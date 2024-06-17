"use client";

import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Icon = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

function Map() {
  return (
    <MapContainer
      className="w-90 m-auto flex z-10 h-72 md:h-96"
      center={[-15.758952381490273, -47.868887162614946]}
      zoom={14.5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap<a/> contribution'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-15.758952381490273, -47.868887162614946]} icon={Icon}>
        <Popup>
          CJR - Empresa Júnior <br /> de computação
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
