import CartProduct from "../CartProduct/CartProduct";
import InitialCart from "../InitialCart/InitialCart";
import "./Cart.css";

const Cart = ({ cartList, setCartList, totalValue, setTotalValue }) => {
  const removeAll = () => {
    setCartList([]);
    setTotalValue(0);
  };

  return (
    <section className="section-cart">
      <div className="cart-header">
        <h3>Carinho de compras</h3>
      </div>
      <div className="products-list">
        {cartList.length === 0 ? (
          <InitialCart />
        ) : (
          cartList.map((cartProduct, index) => (
            <CartProduct
              cartProduct={cartProduct}
              cartList={cartList}
              setCartList={setCartList}
              totalValue={totalValue}
              setTotalValue={setTotalValue}
              key={index}
            />
          ))
        )}
      </div>
      <div className="div-total">
        {cartList.length !== 0 ? (
          <div className="total">
            <div className="div-text">
              <p className="total-text">Total</p>
              <p className="total-value">
                {totalValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <button onClick={removeAll} className="button-remove-all">
              Remover todos
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Cart;
