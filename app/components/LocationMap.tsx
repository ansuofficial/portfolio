import React, { useEffect, useState } from "react";

const LocationMap: React.FC = () => {
  const [MapContainer, setMapContainer] = useState<React.ComponentType | null>(
    null
  );
  const [TileLayer, setTileLayer] = useState<React.ComponentType | null>(null);
  const [Marker, setMarker] = useState<React.ComponentType | null>(null);
  const [Popup, setPopup] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("react-leaflet")
      .then((module) => {
        setMapContainer(() => module.MapContainer);
        setTileLayer(() => module.TileLayer);
        setMarker(() => module.Marker);
        setPopup(() => module.Popup);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!MapContainer || !TileLayer) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="dark:invert h-[400px] w-full">
      <MapContainer
        center={[13.429053732162531, -16.662364061438176]}
        zoom={6}
        style={{ height: "100%", width: "100%", borderRadius: "5px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[13.431408447932895, -16.65847273057114]}>
          <Popup>A Pritty popup</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
