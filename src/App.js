import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
