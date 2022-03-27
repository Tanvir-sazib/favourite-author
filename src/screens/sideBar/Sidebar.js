import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className="mt-2">
        <a href="/authors">
          <h4>Authors</h4>
        </a>
        <a href="/favourites">
          <h4>Favourites</h4>
        </a>
      </div>
    );
};

export default Sidebar;