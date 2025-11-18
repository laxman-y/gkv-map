import React from 'react';
import { Building2 } from 'lucide-react';

const Header = () => {
  return (
    <div className="card">
      <div className="header">
        <Building2 className="header-icon" />
        <div>
          <h1>Campus Navigator</h1>
          <p>Find your way around campus with ease</p>
        </div>
      </div>
    </div>
  );
};

export default Header;