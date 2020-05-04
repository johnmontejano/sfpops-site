import React from 'react';
import Data from '../sfpopos-data.json';

function POPOSDetails(props) {
  const { id } = props.match.params;
  const { images, title, desc, hours, features, geo } = Data[id];
  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images}`} />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export { POPOSDetails };
