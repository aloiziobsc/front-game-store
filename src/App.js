import './css/App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout'

function App() {
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
