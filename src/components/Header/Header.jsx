import "./Header.css";
import Logo from "../Images/Logo.png";

const Header = ({ apiList, listProducts, setListProducts }) => {
  const search = (evt) => {
    const input = evt.target.closest("div").firstChild;

    if (input.value === "") {
      setListProducts([...apiList]);
    } else {
      const newInput =
        input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
      setListProducts(
        listProducts.filter((item) => {
          return item.category === newInput || item.name === newInput;
        })
      );
    }
  };

  return (
    <header>
      <img src={Logo} alt="Logo Burguer" className="logo-img" />
      <div className="div-input">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          className="input-search"
        />
        <button onClick={search} className="input-button">
          Pesquisar
        </button>
      </div>
    </header>
  );
};

export default Header;
