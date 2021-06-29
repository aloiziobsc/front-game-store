import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { reduceProduct, addProduct, countQuantityGame } from '../services/index';

function CardGame(props) {
  const { carrinho, setCarrinho } = props;
  const { produto } = props
  const { produto: { name, price, id, score, image } } = props;
  const [quantityGame, SetQuantityGame] = useState(countQuantityGame(produto));

  useEffect(() => {
  }, [image, quantityGame]);

  return (
    <div className="card-game" data-testid="card-game">
      <div>
        <h4 className="game-card-title">{name}</h4>
        <h5 className="price">{`R$ ${price}`}</h5>
        <p className="product-id">{`ID: ${id}`}</p>
        <img alt="Game Cover" src={ `/assets/${image}` } />
      </div>
      <div className="score">
        <div>
          <button disabled={!quantityGame} className="button-style" onClick={() => reduceProduct(quantityGame, SetQuantityGame, carrinho, setCarrinho)}>
            -
          </button>
            <span>{ quantityGame }</span>
          <button className="button-style" onClick={() => addProduct(quantityGame, SetQuantityGame, produto, setCarrinho)}>
            +
          </button>
        </div>
        <span>{`Popularidade: ${score}`}</span>
      </div>
    </div>
  );
}

CardGame.propTypes = {
  produto: PropTypes.object.isRequired,
};

export default CardGame;
