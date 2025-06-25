import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 20.5937, lng: 78.9629 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      () => console.warn("Location access denied or unavailable")
    );
  }, []);

  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Get in touch below.</p>

      <div className="contact-content">
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Write your message here..." required />
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <MapContainer center={currentLocation} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={currentLocation}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
