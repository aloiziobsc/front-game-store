import React from 'react';
import { useHistory } from 'react-router-dom';
import { calculaTotal, freteGratis, formatPrice } from '../services/index';
import PropTypes from 'prop-types';

function TotalCard(props) {
  const { carrinho } = props;
  const history = useHistory();

  return (
    <div className="card-checkout" data-testid="card-checkout">
      <img alt="imagem-carrinho" src={ '/assets/cart-icon.svg' }></img>
      <span> Preço total: { `R$ ${formatPrice(freteGratis(calculaTotal(carrinho)))}` }</span>
      <button type="button" onClick={ () => history.push('/checkout') } className="card-checkout-button">Fechar compra</button>
    </div>
  );
}

TotalCard.propTypes = {
  carrinho: PropTypes.array.isRequired,
};

export default TotalCard;
