import React, { useState } from 'react';
import { sortArray } from '../services/index';

function SortCards(props) {
  const { setProdutos } = props;
  const [showSortOptions, setSortOptions] = useState(false);

  return (
    <div className="filtro-cards">
      <div onClick={ () => showSortOptions === false ? setSortOptions(true) : setSortOptions(false) }>
        <span data-testid="select-option">Classificar por </span>
        <img alt="Arrow down" className="" src={ `/assets/arrow-down-icon.svg` } />
      </div>
      <React.Fragment>
        { showSortOptions && (
          <div>
            <div className="option-sort" onClick={() => sortArray("01", setProdutos)}>preço</div>
            <div onClick={() => sortArray("02", setProdutos)}>popularidade</div>
            <div className="option-sort" onClick={() => sortArray("03", setProdutos)}>ordem alfabética</div>
          </div>
        ) }
      </React.Fragment>
    </div>
  );
}

export default SortCards;
