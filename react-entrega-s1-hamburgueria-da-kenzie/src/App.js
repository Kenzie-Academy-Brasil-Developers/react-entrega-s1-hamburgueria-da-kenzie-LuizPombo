import { useState } from "react";
import "./App.css";
import Carrinho from "./components/Carrinho";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milk-shake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function showProducts(name) {
    if (name === "") {
    }
    setProducts(
      products.filter(
        (element) => element.name.toUpperCase() === name.toUpperCase()
      )
    );
  }

  function handleClick(productId) {
    console.log(productId, "aqui");
    const find = currentSale.find((element) => element.id === productId);
    const obj = products.find((element) => productId === element.id);
    if (find === undefined) {
      setCurrentSale([...currentSale, obj]);
      setCartTotal(cartTotal + obj.price);
    }
  }

  function remover(productId) {
    setCurrentSale(currentSale.filter((element) => element.id !== productId));
  }

  console.log(currentSale);
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={filteredProducts}
          onChange={(event) => setFilteredProducts(event.target.value)}
        />
        <button onClick={() => showProducts(filteredProducts)}>
          Pesquisar
        </button>
        <MenuContainer products={products} handleClick={handleClick} />
        <div>
          <Carrinho
            obj={currentSale}
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
            remover={remover}
            currentSale={currentSale}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
