import React, { useContext } from 'react';
import GameShopContext from '../context/index';
import { calculaTotal, freteGratis } from '../services/index';

function CardCheckout(props) {
  const { carrinho } = useContext(GameShopContext)
  return (
    <div className="card-checkout" data-testid="card-checkout">
      <img alt="imagem-carrinho" src={ '/assets/cart-icon.svg' }></img>
      <span> Preço total: { freteGratis(calculaTotal(carrinho), carrinho.length) }</span>
    </div>
  );
}

export default CardCheckout;
