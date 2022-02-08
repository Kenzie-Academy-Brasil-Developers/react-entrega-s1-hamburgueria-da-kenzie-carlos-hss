import "./Product.css";

const Product = ({ product, generateCart }) => {
  return (
    <div className="div-product">
      <div className="div-img">
        <img src={product.img} alt={product.name} className="product-img" />
      </div>
      <div className="div-texts">
        <h3 className="product-name">{product.name}</h3>
        <small className="product-category">{product.category}</small>
        <p className="product-price">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          onClick={() => {
            generateCart(product);
          }}
          className="product-button"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;
