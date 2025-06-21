import React, { useEffect, useState } from 'react';
import '../styles/Charge.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const Charge = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
  const [stations, setStations] = useState([]);
  const [locationQuery, setLocationQuery] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '82d48a6d-0a51-452d-ab34-f34614615b6a';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        setMapCenter({ lat: latitude, lng: longitude });
      },
      () => console.warn("Geolocation not available or denied")
    );
  }, []);

  const fetchLatLng = async (placeName) => {
    const res = await axios.get(`https://nominatim.openstreetmap.org/search`, {
      params: {
        q: placeName,
        format: 'json',
        limit: 1,
      },
    });

    if (res.data && res.data.length > 0) {
      return {
        lat: parseFloat(res.data[0].lat),
        lng: parseFloat(res.data[0].lon),
      };
    }

    return null;
  };

  const searchStations = async () => {
    setLoading(true);
    setStations([]);
    setPopupVisible(false);
    setPopupMessage('');

    let coords = currentLocation;

    if (locationQuery.trim()) {
      coords = await fetchLatLng(locationQuery);
      if (!coords) {
        setPopupMessage('❌ Location not found.');
        setPopupVisible(true);
        setLoading(false);
        return;
      }
      setMapCenter(coords);
    }

    try {
      const res = await axios.get(`https://api.openchargemap.io/v3/poi/`, {
        params: {
          output: 'json',
          latitude: coords.lat,
          longitude: coords.lng,
          distance: 20,
          distanceunit: 'KM',
          key: apiKey,
        },
      });

      const sortedData = res.data
        .sort((a, b) => a.AddressInfo.Distance - b.AddressInfo.Distance)
        .slice(0, 10);

      if (sortedData.length === 0) {
        setPopupMessage('⚠️ No stations found within 20km radius.');
        setPopupVisible(true);
      } else {
        setStations(sortedData);
        setPopupData(sortedData);
        setPopupVisible(true);
      }
    } catch (err) {
      console.error(err);
      setPopupMessage('❌ Error fetching station data.');
      setPopupVisible(true);
    }

    setLoading(false);
  };

  return (
    <div className="charge-page">
      <h1>Find EV Charging Stations</h1>
      <p>Search any city or use your current location</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search location like Patna, Delhi..."
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
        <button onClick={searchStations}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <MapContainer center={mapCenter} zoom={8} scrollWheelZoom={true} className="map">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentLocation && (
          <Marker position={currentLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {stations.map((station) => (
          <Marker
            key={station.ID}
            position={{
              lat: station.AddressInfo.Latitude,
              lng: station.AddressInfo.Longitude,
            }}
          >
            <Popup>
              <strong>{station.AddressInfo.Title}</strong><br />
              {station.AddressInfo.AddressLine1}<br />
              {station.AddressInfo.Distance?.toFixed(2)} km away
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Popup Modal */}
      {popupVisible && (
        <div className="station-popup">
          <div className="station-popup-content">
            <span className="close-btn" onClick={() => setPopupVisible(false)}>✖</span>
            {popupMessage ? (
              <p>{popupMessage}</p>
            ) : (
              <>
                <h3>Top 10 Nearby Stations</h3>
                <ul>
                  {popupData.map((station) => (
                    <li key={station.ID}>
                      <strong>{station.AddressInfo.Title}</strong> – {station.AddressInfo.Distance?.toFixed(2)} km
                      <br />
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${station.AddressInfo.Latitude},${station.AddressInfo.Longitude}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        📍 Get Directions
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Charge;
