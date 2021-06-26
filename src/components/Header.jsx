import React from 'react';
import SortCards from './SortCards';

function Header() {
  return (
    <div>
      <header>
        <h1>
          Game Shop 🎮
        </h1>
        <div  className="order-cards">
          <SortCards/>
        </div>
      </header>
    </div>
  );
}

export default Header;
