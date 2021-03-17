import './App.css';
import { createContext, useState } from 'react';
import CategoryList from './Components/CategoryList/CategoryList';
import ProductList from './Components/ProductList/ProductList';

export const CategoryContext = createContext()

function App() {
  const [Category, setCategory] = useState("Laptop")

  return (
    <div className="App">
      <CategoryContext.Provider value={[Category, setCategory]} >
        <h2>Select Your Category</h2>
        <CategoryList></CategoryList>
        <ProductList></ProductList>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
