import React from 'react';
import { MapPin, Globe, Clock, Info } from 'lucide-react';

const IPDetails = ({ ipData, title }) => {
  if (!ipData) return null;
  
  // Don't render if there's no actual IP data (just error)
  if (!ipData.ip && ipData.error) {
    return (
      <div className="error-message">
        <Info size={20} />
        <span>{ipData.error}</span>
      </div>
    );
  }
  
  return (
    <div className="result-card animate-fade-in">
      <h2>{title || 'IP Address Details'}</h2>
      
      <div className="detail-row">
        <span className="detail-label">
          <Globe size={16} className="detail-icon" />
          IP Address:
        </span>
        <span className="detail-value">{ipData.ip}</span>
      </div>
      
      <div className="detail-row">
        <span className="detail-label">
          <MapPin size={16} className="detail-icon" />
          Location:
        </span>
        <span className="detail-value">
          {[
            ipData.city, 
            ipData.region, 
            ipData.country
          ].filter(Boolean).join(', ')}
        </span>
      </div>
      
      {ipData.timezone && (
        <div className="detail-row">
          <span className="detail-label">
            <Clock size={16} className="detail-icon" />
            Timezone:
          </span>
          <span className="detail-value">{ipData.timezone}</span>
        </div>
      )}
      
      {ipData.isp && (
        <div className="detail-row">
          <span className="detail-label">
            <Info size={16} className="detail-icon" />
            ISP:
          </span>
          <span className="detail-value">{ipData.isp}</span>
        </div>
      )}
    </div>
  );
};

export default IPDetails;