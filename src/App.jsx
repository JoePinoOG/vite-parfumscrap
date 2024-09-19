import { useState } from 'react'
import './App.css'

function App() {
  // Estado para almacenar el término de búsqueda y los productos
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  // Función para manejar el cambio en el input de búsqueda
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para buscar productos (simulando llamada a una API)
  const searchProducts = async (e) => {
    e.preventDefault();
    
    // Aquí harías una llamada a una API real para buscar productos
    // array para simular
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 150 },
      { id: 3, name: 'Product 3', price: 200 },
    ];

    // Filtrar 
    const filteredProducts = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <h1>Buscador de Productos</h1>

      <form onSubmit={searchProducts}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product">
              <h2>{product.name}</h2>
              <p>Precio: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
}


export default App
