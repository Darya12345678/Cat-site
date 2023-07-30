import React from 'react';
import CatList from './CatList';
import CatDetails from './CatDetails';


function CatSite() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100vh',
    background: 'url(path_to_pattern_image) center/cover',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: '20px',
    position: 'relative',
    textAlign: 'center',
    margin: 'auto',
  };

  const catImageStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
  };
  

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>База данных котов</h1>
      <img src="path_to_cat_image" alt="Cat" style={catImageStyle} />
      <CatList />
      <CatDetails />
    </div>
  );
}

export default CatSite;