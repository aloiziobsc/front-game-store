import React from 'react';
import SortCards from './SortCards';

function Header(props) {
  const { setProdutos } = props;
  
  return (
    <div>
      <header>
        <h1>
          Game Shop 🎮
        </h1>
        <div  className="order-cards">
          <SortCards setProdutos = { setProdutos }/>
        </div>
      </header>
    </div>
  );
}

export default Header;
