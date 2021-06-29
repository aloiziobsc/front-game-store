import React from 'react';
import SortCards from './SortCards';
import PropTypes from 'prop-types';

function Header(props) {
  const { setProdutos } = props;
  
  return (
    <div>
      <header>
        <h1 className="titulo-header">
          Game Shop 🎮
        </h1>
        <div  className="order-cards">
          <SortCards setProdutos = { setProdutos }/>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  setProdutos: PropTypes.func.isRequired,
};

export default Header;
