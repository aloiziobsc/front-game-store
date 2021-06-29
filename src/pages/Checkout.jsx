import React, { useState } from 'react';
import CheckoutCard from '../components/CheckoutCard';
import { calculaTotal, freteGratis, formatPrice } from '../services/index';


function Checkout() {
  const [carrinho] = useState(JSON.parse(localStorage.getItem('carrinho')));

  return (
    <div>
      <h1>Itens no Carrinho:</h1>
      <h3>Preço total: { `R$ ${formatPrice(freteGratis(calculaTotal(carrinho)))}` }</h3>
      <div className="checkout-page">
      { carrinho && carrinho.map((produto, index) => <CheckoutCard key={index} produto = { produto }/>)}
      </div>
    </div>
  );
}

export default Checkout;
