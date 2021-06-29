import React, { useState } from 'react';
import { sortArray } from '../services/index';
import PropTypes from 'prop-types';

function SortCards(props) {
  const { setProdutos } = props;
  const [showSortOptions, setSortOptions] = useState(false);

  return (
    <div className="filtro-cards">
      <button className="option-sort-header" onClick={ () => showSortOptions === false ? setSortOptions(true) : setSortOptions(false) }>
        <span data-testid="select-option"><b>Classificar por </b></span>
        <img alt="Arrow down" className="" src={ `/assets/arrow-down-icon.svg` } />
      </button>
      <React.Fragment>
        { showSortOptions && (
          <div className="buttons-option-sort">
            <button className="option-sort" onClick={() => sortArray("01", setProdutos)}>
              <b>Preço</b>
            </button>
            <button className="option-sort" onClick={() => sortArray("02", setProdutos)}>
              <b>Popularidade</b>
            </button>
            <button className="option-sort" onClick={() => sortArray("03", setProdutos)}>
              <b>Ordem alfabética</b>
            </button>
          </div>
        ) }
      </React.Fragment>
    </div>
  );
}

SortCards.propTypes = {
  setProdutos: PropTypes.func.isRequired,
};

export default SortCards;
