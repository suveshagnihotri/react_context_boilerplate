import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './component/ProductList';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ProductList/>
      </div>
    </MyProvider>
  );
}

export default App;
