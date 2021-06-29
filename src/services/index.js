import produtosJSON from '../produtos/products.json';

const sortArray = (filtro, setProdutos) => {
  if (filtro === "01") {
    let newArr = produtosJSON.sort((a, b) => {
      return (a.price > b.price) ? 1 : -1
    })
    console.log(newArr)
    localStorage.setItem('produtos', JSON.stringify(newArr))
    setProdutos(newArr)
  }
  if (filtro === "02") {
    let newArr = produtosJSON.sort((a, b) => {
      return (a.score > b.score) ? -1 : 1
    })
    console.log(newArr)
    localStorage.setItem('produtos', JSON.stringify(newArr))
    setProdutos(newArr)
  }
  if (filtro === "03") {
    let newArr = produtosJSON.sort((a, b) => {
      return (a.name > b.name) ? 1 : -1
    })
    console.log(newArr)
    localStorage.setItem('produtos', JSON.stringify(newArr))
    setProdutos(newArr)
  }
}

const reduceProduct = (quantity,setQuantity, produto, setCarrinho) => {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }
  const arrCarrinho = JSON.parse(localStorage.getItem('carrinho'));
  const positionItem = arrCarrinho.indexOf(produto);
  arrCarrinho.splice(arrCarrinho.indexOf(positionItem), 1);
  localStorage.setItem('carrinho', JSON.stringify(arrCarrinho));
  setCarrinho(arrCarrinho);
};

const addProduct = (quantity,setQuantity, produto, setCarrinho) => {
  setQuantity(quantity + 1);
  const arrCarrinho = JSON.parse(localStorage.getItem('carrinho'));
  arrCarrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(arrCarrinho));
  setCarrinho(arrCarrinho);
};

const calculaTotal = (carrinho) => {
  const quantGames = carrinho.length
  if (quantGames === 0) {
    return 0
  }
  const totalPriceProducts = carrinho.reduce((acc, elem) => acc + elem.price, 0)
  return (quantGames * 10) + totalPriceProducts
}

const freteGratis = (price) => {
  const arrCarrinho = JSON.parse(localStorage.getItem('carrinho'));
  const quantProdutos = arrCarrinho.length
  const transportCost = quantProdutos * 10
  const onlyProductsCost = price - transportCost
  if (onlyProductsCost > 250) {
    return onlyProductsCost
  } else return price
}

const formatPrice = (valor) => {
  return ((valor * 10) / 10).toFixed(2).toString().replace('.', ',')
}

const countQuantityGame = (produto) => {
  let count = 0
  const arrCarrinho = JSON.parse(localStorage.getItem('carrrinho'))
  if (!arrCarrinho) {
    return 0
  }
  for(let index = 0; index < arrCarrinho.lenght; index += 1) {
    if (arrCarrinho[index] === produto) {
      count = count + 1
    }
  }
  return count
}

export {
  sortArray,
  reduceProduct,
  addProduct,
  freteGratis,
  calculaTotal,
  formatPrice,
  countQuantityGame,
}
