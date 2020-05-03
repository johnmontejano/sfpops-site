import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import Data from './sfpopos-data.json';

function POPOSList() {
  const spaces = Data.map(({ title, address, images }) => {
    return <POPOSSpace name={title} address={address} image={images[0]} />;
  });

  return <div className="POPOSList">{spaces}</div>;
}

export { POPOSList };
