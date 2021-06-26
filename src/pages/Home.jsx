import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import CardGame from '../components/CardGame';
import CardCheckout from '../components/CardCheckout';
import GameShopContext from '../context/index';

function Home() {
  const { produtos } = useContext(GameShopContext)

  useEffect(() => {
  }, [produtos]);

  return (
    <React.Fragment>
      <div className="header-sortCards-container">
        <Header />
      </div>
      <div className="cards-game-container">
        {produtos.map((produto, index) => <CardGame key={index} produto = { produto }/>)}
      </div>
      <CardCheckout />
      <footer>
        <p>Author: Aloízio Borges Santos Coelho</p>
      </footer>
    </React.Fragment>
  );
}

export default Home;
