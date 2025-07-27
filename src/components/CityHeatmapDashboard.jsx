import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cityOptions = {
  Mumbai: { center: [19.0760, 72.8777], clusters: [{ lat: 19.0760, lng: 72.8777, count: 10 }, { lat: 19.0822, lng: 72.7411, count: 5 }] },
  Pune: { center: [18.5204, 73.8567], clusters: [{ lat: 18.5204, lng: 73.8567, count: 8 }, { lat: 18.5315, lng: 73.8440, count: 4 }] },
  Jalgaon: { center: [21.0077, 75.5626], clusters: [{ lat: 21.0077, lng: 75.5626, count: 6 }, { lat: 21.0195, lng: 75.5509, count: 3 }] },
};

const CityHeatmapDashboard = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [greenSpots, setGreenSpots] = useState([]);

  const currentCity = cityOptions[selectedCity];

  const AddGreenSpot = () => {
    useMapEvents({
      click(e) {
        setGreenSpots(prev => [...prev, e.latlng]);
      },
    });
    return null;
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-green-100 dark:border-green-900">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">🗺️ City Heatmap Dashboard</h2>
        <select
          className="border px-3 py-1 rounded-md dark:bg-gray-800 dark:text-white"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setGreenSpots([]);
          }}
        >
          {Object.keys(cityOptions).map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Click on the map to mark <strong>“green spots”</strong> like parks or bike-friendly zones. Visualize real-time <strong>eco activity clusters</strong> in <span className="text-green-600 dark:text-green-300 font-medium">{selectedCity}</span>.
      </p>

      <MapContainer center={currentCity.center} zoom={13} style={{ height: '450px', width: '100%', borderRadius: '12px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <AddGreenSpot />

        {/* Mark user added green spots */}
        {greenSpots.map((spot, index) => (
          <Marker key={index} position={spot}>
            <Popup>🌳 User-added Green Spot</Popup>
          </Marker>
        ))}

        {/* Visual eco clusters */}
        {currentCity.clusters.map((cluster, index) => (
          <Circle
            key={index}
            center={[cluster.lat, cluster.lng]}
            radius={cluster.count * 100}
            pathOptions={{ color: 'green', fillColor: 'green', fillOpacity: 0.3 }}
          >
            <Popup>{cluster.count} eco actions here</Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default CityHeatmapDashboard;
