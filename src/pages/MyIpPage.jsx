import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { fetchUserIPData } from '../services/ipService';
import IPDetails from '../components/IPDetails';
import Loader from '../components/Loader';

const MyIpPage = () => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMyIpDetails = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUserIPData();
      
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
    <div className="my-ip-page page-with-bg">
      <div className="page-overlay">
        <div className="container">
          <div className="content-box animate-fade-in">
            <h1>My IP Address Finder</h1>
            <p>Click the button below to find your IP address and location details</p>
            
            <button 
              className="action-button"
              onClick={getMyIpDetails}
              disabled={loading}
            >
              <MapPin size={20} />
              {loading ? 'Loading...' : 'Get My IP Details'}
            </button>

            {loading && <Loader text="Retrieving your IP information..." />}
            {error && !loading && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            {ipData && !loading && (
              <IPDetails ipData={ipData} title="Your IP Details" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIpPage;