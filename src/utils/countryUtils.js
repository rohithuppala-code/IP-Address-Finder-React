/**
 * Converts a country code to a full country name using Intl.DisplayNames API
 * Falls back to the original code if the API is not supported or if the code is invalid
 * 
 * @param {string} countryCode - The ISO 3166-1 alpha-2 country code
 * @returns {string} - The full country name or the original code if conversion fails
 */
export const getCountryName = (countryCode) => {
  if (!countryCode) return 'Unknown';
  
  try {
    // Use Intl.DisplayNames if available in the browser
    if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
      const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      return regionNames.of(countryCode.toUpperCase()) || countryCode;
    }
    
    // Fallback to our own mapping for older browsers
    const countryMap = {
      'US': 'United States',
      'GB': 'United Kingdom',
      'CA': 'Canada',
      'AU': 'Australia',
      'IN': 'India',
      'JP': 'Japan',
      'DE': 'Germany',
      'FR': 'France',
      'IT': 'Italy',
      'BR': 'Brazil',
      'RU': 'Russia',
      'CN': 'China',
      'ES': 'Spain',
      'MX': 'Mexico',
      // Add more countries as needed
    };
    
    return countryMap[countryCode.toUpperCase()] || countryCode;
  } catch (error) {
    console.error('Error converting country code:', error);
    return countryCode;
  }
};