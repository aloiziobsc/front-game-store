import './css/App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import produtosJSON from './produtos/products.json';

function App() {
  localStorage.setItem('produtos', JSON.stringify(produtosJSON));
  localStorage.setItem('carrinho', JSON.stringify([]));
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/"><Home/></Route>
        <Route exact path="/checkout"><Checkout/></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
