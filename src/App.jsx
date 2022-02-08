import "./App.css";
import { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [apiList, setApiList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((products) => products.json())
      .then((arrayProducts) => {
        setApiList(arrayProducts);
        setListProducts(arrayProducts);
      });
  }, []);

  console.log(apiList);
  console.log(listProducts);

  return (
    <div className="App">
      <Header
        apiList={apiList}
        listProducts={listProducts}
        setListProducts={setListProducts}
      />
      <div className="main">
        <ProductsList
          listProducts={listProducts}
          setCartList={setCartList}
          cartList={cartList}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
        />
        <Cart
          cartList={cartList}
          setCartList={setCartList}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
        />
      </div>
    </div>
  );
}

export default App;
