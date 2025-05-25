import { getCountryName } from '../utils/countryUtils';

// API key for IP geolocation service
const API_KEY = 'at_0wlzWV8457C5HySFT7JsZtTFZP8De';

/**
 * Fetch IP data for the current user
 */
export const fetchUserIPData = async () => {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      ip: data.ip,
      city: data.location?.city || 'Unknown',
      region: data.location?.region || 'Unknown',
      country: getCountryName(data.location?.country),
      countryCode: data.location?.country || '',
      postalCode: data.location?.postalCode,
      timezone: data.location?.timezone,
      lat: data.location?.lat,
      lng: data.location?.lng,
      isp: data.isp
    };
  } catch (error) {
    console.error('Error fetching user IP data:', error);
    return {
      ip: '',
      city: '',
      region: '',
      country: 'Unknown',
      error: 'Failed to fetch IP data. Please try again later.'
    };
  }
};

/**
 * Fetch IP data for a given IP address
 */
export const fetchIPAddressData = async (ipAddress) => {
  try {
    if (!ipAddress.trim()) {
      throw new Error('IP address cannot be empty');
    }
    
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      ip: data.ip,
      city: data.location?.city || 'Unknown',
      region: data.location?.region || 'Unknown',
      country: getCountryName(data.location?.country),
      countryCode: data.location?.country || '',
      postalCode: data.location?.postalCode,
      timezone: data.location?.timezone,
      lat: data.location?.lat,
      lng: data.location?.lng,
      isp: data.isp
    };
  } catch (error) {
    console.error('Error fetching IP address data:', error);
    return {
      ip: '',
      city: '',
      region: '',
      country: '',
      error: error instanceof Error ? error.message : 'Failed to fetch IP data. Please try again later.'
    };
  }
};