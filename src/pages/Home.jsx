import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardGame from '../components/CardGame';
import TotalCard from '../components/TotalCard';
import produtosJSON from '../produtos/products.json';

function Home() {
  const [produtos, setProdutos] = useState(JSON.parse(localStorage.getItem('produtos')));
  const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem('carrinho')));

  useEffect(() => {
    localStorage.clear()
    localStorage.setItem('produtos', JSON.stringify(produtosJSON));
    localStorage.setItem('carrinho', JSON.stringify([]));
    setProdutos(produtos);
  }, [produtos, setProdutos, setCarrinho]);

  return (
    <React.Fragment>
      <div className="header-sortCards-container">
        <Header setProdutos={ setProdutos }/>
      </div>
      <div className="cards-game-container">
        { produtos && produtos.map((produto, index) => <CardGame key={index} produto = { produto } 
        carrinho = { carrinho } setCarrinho = { setCarrinho }
        />)}
      </div>
      <TotalCard carrinho = { carrinho }/>
      <footer>
        <p>Author: Aloízio Borges Santos Coelho</p>
      </footer>
    </React.Fragment>
  );
}

export default Home;
