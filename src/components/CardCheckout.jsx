import React, { useContext } from 'react';
import GameShopContext from '../context/index';
import { calculaTotal, freteGratis } from '../services/index';
import logo from '../assets/cart-icon.svg'

function CardCheckout(props) {
  const { carrinho, setCarrinho } = useContext(GameShopContext)
  return (
    <div className="card-checkout" data-testid="card-checkout">
      <img src={ logo }></img>
      <span>Preço Total</span>
    </div>
  );
}

export default CardCheckout;
