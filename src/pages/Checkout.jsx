import React, { useState } from 'react';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  const [carrinho] = useState(JSON.parse(localStorage.getItem('carrinho')));

  return (
    <div>
      <h1>Itens Carrinho:</h1>
      { carrinho && carrinho.map((produto, index) => <CheckoutCard key={index} produto = { produto }/>)}
    </div>
  );
}

export default Checkout;
