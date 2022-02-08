import "./CartProduct.css";

const CartProduct = ({
  cartProduct,
  cartList,
  setCartList,
  totalValue,
  setTotalValue,
}) => {
  const remove = () => {
    setTotalValue(totalValue - cartProduct.price);
    setCartList(cartList.filter((item) => item !== cartProduct));
  };

  return (
    <div className="div-cart-product" key={cartProduct.id}>
      <div className="div-cart-img">
        <img src={cartProduct.img} alt={cartProduct.name} />
      </div>
      <div className="div-cart-texts">
        <h3>{cartProduct.name}</h3>
        <small>{cartProduct.category}</small>
      </div>
      <div className="div-cart-button">
        <button onClick={remove}>Remover</button>
      </div>
    </div>
  );
};

export default CartProduct;
