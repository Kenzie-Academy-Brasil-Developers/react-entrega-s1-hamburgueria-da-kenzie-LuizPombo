import Product from "../Product";
const MenuContainer = ({ products, handleClick }) => {
  return (
    <div>
      {products.map((product, index) => (
        <Product product={product} key={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default MenuContainer;
