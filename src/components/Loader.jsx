import React from 'react';

const Loader = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClass = size === 'sm' ? 'loader-sm' : 
                    size === 'lg' ? 'loader-lg' : '';
  
  return (
    <div className="loader-container">
      <div className={`loader ${sizeClass}`}></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;