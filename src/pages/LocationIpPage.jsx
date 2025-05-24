import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { fetchIPAddressData } from '../services/ipService';
import IPDetails from '../components/IPDetails';
import Loader from '../components/Loader';

const LocationIpPage = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ipAddress.trim()) {
      setError('Please enter an IP address');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchIPAddressData(ipAddress);
      
      if (data.error) {
        setError(data.error);
      } else {
        setIpData(data);
      }
    } catch (err) {
      setError('Failed to fetch IP details. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="location-ip-page page-with-bg">
      <div className="page-overlay">
        <div className="container">
          <div className="content-box animate-fade-in">
            <h1>Find IP Address Details</h1>
            <p>Enter an IP address to get its location details</p>

            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                placeholder="Enter IP address..."
                className="input-field"
              />
              <button 
                type="submit"
                className="action-button"
                disabled={loading}
              >
                <Search size={20} />
                {loading ? 'Searching...' : 'Find IP Details'}
              </button>
            </form>

            {loading && <Loader text="Looking up IP information..." />}
            {error && !loading && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            {ipData && !loading && (
              <IPDetails ipData={ipData} title="IP Address Details" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationIpPage;