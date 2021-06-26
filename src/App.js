import './css/App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout'
import GameShopContext from './provider/index'

function App() {
  return (
    <GameShopContext>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/"><Home/></Route>
          <Route exact path="/checkout"><Checkout/></Route>
        </div>
      </BrowserRouter>
    </GameShopContext>
  );
}

export default App;
