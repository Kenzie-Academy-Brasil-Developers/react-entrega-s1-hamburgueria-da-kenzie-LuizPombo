const Product = ({ product, handleClick }) => {
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>R$ {product.price}</p>
      <button onClick={() => handleClick(product.id)}>Adicionar</button>
    </div>
  );
};

export default Product;
