import produtosJSON from '../produtos/products.json'

const sortArray = (filtro, setProdutos) => {
  if (filtro === "01") {
    const newArr = produtosJSON.sort((a, b) => {
      return (a.price > b.price) ? 1 : -1
    })
    console.log(newArr)
    setProdutos(newArr)
  }
  if (filtro === "02") {
    const newArr = produtosJSON.sort((a, b) => {
      return (a.score > b.score) ? -1 : 1
    })
    console.log(newArr)
    setProdutos(newArr)
  }
  if (filtro === "03") {
    const newArr = produtosJSON.sort((a, b) => {
      return (a.name > b.name) ? 1 : -1
    })
    console.log(newArr)
    setProdutos(newArr)
  }
}

const reduceProduct = (quantity,setQuantity, carrinho, setCarrinho) => {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }
};

const addProduct = (quantity,setQuantity, carrinho, setCarrinho) => {
  setQuantity(quantity + 1);
};

const calculaTotal = (carrinho) => {
  const quantGames = carrinho.length
  const totalPriceProducts = carrinho.reduce((acc, elem) => acc + elem.price, 0)
  return (quantGames * 10) + totalPriceProducts
}

const freteGratis = (price, quantProdutos) => {
  const transportCost = quantProdutos * 10
  const onlyProductsCost = price - transportCost
  if (onlyProductsCost > 250) {
    return onlyProductsCost
  } else return price
}

export {
  sortArray,
  reduceProduct,
  addProduct,
  freteGratis,
  calculaTotal,
}
