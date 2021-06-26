import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import CardGame from '../components/CardGame';
import SortCards from '../components/SortCards';
import CardCheckout from '../components/CardCheckout';
import GameShopContext from '../context/index';

function Home() {
  const { produtos } = useContext(GameShopContext)

  useEffect(() => {
  }, [produtos]);

  return (
    <React.Fragment>
      <Header />
      <SortCards/>
      <div className="cards-game-container">
        {produtos.map((produto, index) => <CardGame key={index} produto = { produto }/>)}
      </div>
      <CardCheckout />
    </React.Fragment>
  );
}

export default Home;
