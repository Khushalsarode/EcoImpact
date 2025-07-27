import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const AutoLocation = ({ onUseLocation }) => {
  const [geoCoords, setGeoCoords] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem("autoLocationData");
    if (cached) {
      const parsed = JSON.parse(cached);
      setGeoCoords(parsed.coords);
      setLocationData(parsed.location);
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const coords = { latitude, longitude };
        setGeoCoords(coords);

        fetch("https://ipapi.co/json/")
          .then((res) => res.json())
          .then((data) => {
            setLocationData(data);
            localStorage.setItem(
              "autoLocationData",
              JSON.stringify({ coords, location: data })
            );
          })
          .catch(() => setError("Failed to fetch location info."))
          .finally(() => setLoading(false));
      },
      () => {
        setError("Location permission denied or failed.");
        setLoading(false);
      }
    );
  }, []);

  const handleUseLocation = () => {
    if (locationData && geoCoords) {
      const payload = {
        ...locationData,
        latitude: geoCoords.latitude,
        longitude: geoCoords.longitude,
      };
      if (onUseLocation) onUseLocation(payload); // Callback to parent
      alert("📍 Location saved to profile.");
    }
  };

  const position = geoCoords ? [geoCoords.latitude, geoCoords.longitude] : [0, 0];

  if (loading) return <div className="text-sm text-gray-500 dark:text-gray-400">📍 Detecting location...</div>;

  if (error) {
    return (
      <div className="space-y-3 text-red-600 dark:text-red-400 text-sm">
        <p>⚠️ {error}</p>
        <div className="space-y-2">
          <label className="block">
            City: <input className="border p-1 rounded w-full" placeholder="Enter city manually" />
          </label>
          <label className="block">
            Country: <input className="border p-1 rounded w-full" placeholder="Enter country" />
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow border dark:border-gray-700">
      {/* Info Panel */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">🌐 Auto-Detected Location</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>💻 <strong>IP:</strong> {locationData?.ip || "N/A"}</li>
          <li>🏙️ <strong>City:</strong> {locationData?.city || "N/A"}</li>
          <li>🗺️ <strong>Region:</strong> {locationData?.region || "N/A"}</li>
          <li>🌎 <strong>Country:</strong> {locationData?.country_name || "N/A"}</li>
          <li>⏰ <strong>Timezone:</strong> {locationData?.timezone || "N/A"}</li>
          <li>🛰️ <strong>Org:</strong> {locationData?.org || "N/A"}</li>
          <li>📌 <strong>Coords:</strong> {position[0].toFixed(4)}, {position[1].toFixed(4)}</li>
        </ul>

        <button
          onClick={handleUseLocation}
          className="mt-3 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded shadow"
        >
          ✅ Use this Location
        </button>
      </div>

      {/* Map Panel */}
      <div className="h-64 w-full rounded-lg overflow-hidden">
        <MapContainer center={position} zoom={10} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              You are near <strong>{locationData?.city}</strong>, {locationData?.country_name}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default AutoLocation;
