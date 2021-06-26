import React, { useState } from 'react';
import produtosJSON from '../produtos/products.json'

// Proptypes
import PropTypes from 'prop-types';

// Context
import GameShopContext from '../context/index';

export default function GameShopProvider({ children }) {
  const [produtos, setProdutos] = useState(produtosJSON)
  const [carrinho, setCarrinho] = useState([]);

  const context = {
    produtos,
    setProdutos,
    carrinho,
    setCarrinho,
  };

  return (
    <GameShopContext.Provider value={ context }>
      { children }
    </GameShopContext.Provider>
  );
}

GameShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};