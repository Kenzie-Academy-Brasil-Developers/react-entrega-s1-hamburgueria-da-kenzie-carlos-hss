import Product from "../Product/Product";
import "./ProductsList.css";

const ProductsList = ({
  listProducts,
  setCartList,
  cartList,
  totalValue,
  setTotalValue,
}) => {
  const generateCart = (product) => {
    if (!cartList.includes(product)) {
      setCartList([...cartList, product]);
      setTotalValue(totalValue + product.price);
    }
  };

  return (
    <section className="section-products">
      {listProducts.map((product, index) => (
        <Product
          product={product}
          key={index}
          generateCart={generateCart}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
          cartList={cartList}
        />
      ))}
    </section>
  );
};

export default ProductsList;
