import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My E-commerce App</h1>
      </header>
      <main>
        <div className="product-list">
          <div className="product-card">
            <img src="https://rb.gy/mvvlx" alt="Product 1" />
            <h2>Product 1</h2>
            <p>$10</p>
          </div>
          <div className="product-card">
            <img src="https://rb.gy/08ciz" alt="Product 2" />
            <h2>Product 2</h2>
            <p>$20</p>
          </div>
          <div className="product-card">
            <img src="https://rb.gy/vj7n7" alt="Product 3" />
            <h2>Product 3</h2>
            <p>$30</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
