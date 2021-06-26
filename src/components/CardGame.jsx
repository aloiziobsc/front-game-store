import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { reduceProduct, addProduct } from '../services/index';
import GameShopContext from '../context/index';

function CardGame(props) {
  const [loadImage, setLoadImage] = useState('')
  const [quantityGame, SetQuantityGame] = useState(0)
  const { carrinho, setCarrinho } = useContext(GameShopContext)
  const { produto: { name, price, id, score, image } } = props
  
  // const getImagePath = (param) => {
  //   import(`./assets/${param}`).then(img => {
  //     console.log(img)
  //     setLoadImage(img)
  //   })
  // }

  useEffect(() => {
  }, [image, quantityGame]);

  return (
    <div className="card-game">
      {/* <img alt="Movie Cover" className="movie-card-image" src={imagePath} /> */}
      <div>
        <h4 className="game-card-title">{name}</h4>
        <h5 className="price">{`R$ ${price}`}</h5>
        <p className="product-id">{`ID: ${id}`}</p>
        {loadImage && <img alt="Game Cover" className="movie-card-image" src={ image } />}
      </div>
      <div className="score">
        <div>
          <button disabled={!quantityGame} className="button-style" onClick={() => reduceProduct(quantityGame, SetQuantityGame, carrinho, setCarrinho)}>
            -
          </button>
            <span>{ quantityGame }</span>
          <button className="button-style" onClick={() => addProduct(quantityGame, SetQuantityGame, carrinho, setCarrinho)}>
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
