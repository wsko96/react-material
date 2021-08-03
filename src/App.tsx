import './App.css';
import { ProductGrid } from './product-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductGrid inStockOnly={false} />
      </header>
    </div>
  );
}

export default App;
