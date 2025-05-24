import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="home-page page-with-bg">
      <div className="page-overlay">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <h1>IP Address Finder</h1>
            <p className="hero-description">
              Discover detailed IP address information with our powerful, easy-to-use tools. 
              Get precise location data including city, region, and country details.
            </p>
            
            <div className="features-grid">
              <Link to="/my-ip" className="feature-card animate-slide-up" style={{animationDelay: '0.1s'}}>
                <div className="feature-icon">
                  <MapPin size={48} />
                </div>
                <h2>Get My IP Address</h2>
                <p>Find out your current IP address and get detailed location information about your connection</p>
                <span className="feature-link">Check my IP &rarr;</span>
              </Link>
              
              <Link to="/location-ip" className="feature-card animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="feature-icon">
                  <Search size={48} />
                </div>
                <h2>Find IP by Address</h2>
                <p>Look up location details for any IP address and get comprehensive information about its origin</p>
                <span className="feature-link">Look up an IP &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;