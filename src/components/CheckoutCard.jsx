import React from 'react';
import { formatPrice } from '../services/index';

import PropTypes from 'prop-types';

function CheckoutCard(props) {
  const { produto: { name, price, id, score, image } } = props;

  return (
    <div className="card-game" data-testid="card-game">
      <div>
        <h4 className="game-card-title">{name}</h4>
        <h5 className="price">{`R$ ${formatPrice(price)}`}</h5>
        <p className="product-id">{`ID: ${id}`}</p>
        <img alt="Game Cover" src={ `/assets/${image}` } />
      </div>
      <div className="score">
        <span>{`Popularidade: ${score}`}</span>
      </div>
    </div>
  );
}

CheckoutCard.propTypes = {
  produto: PropTypes.object.isRequired,
};

export default CheckoutCard;
