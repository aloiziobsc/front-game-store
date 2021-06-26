import React, { useContext } from 'react';
import { sortArray } from '../services/index'
import GameShopContext from '../context/index';

function SortCards() {
  const { setProdutos } = useContext(GameShopContext)

  return (
    <div className="filtro-cards">
      <span>Classificar por:</span>
        <select data-testid="select-option" onChange={({ target }) => sortArray(target.value, setProdutos)}>
          <option value="01">preço</option>
          <option value="02">popularidade</option>
          <option value="03">ordem alfabética</option>
        </select>
    </div>
  );
}

export default SortCards;
