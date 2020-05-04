import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h4>
        John Montejano all right reserved &copy; {new Date().getFullYear()}
      </h4>
    </div>
  );
}
export { Footer };
