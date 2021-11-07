const Carrinho = ({ obj, cartTotal, setCurrentSale, remover, currentSale }) => {
  return (
    <div>
      <ul>
        {obj.map((product, index) => (
          <li key={index}>
            <div>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>R$ {product.price}</p>
              <button onClick={() => remover(product.id)}>remover</button>
            </div>
          </li>
        ))}
      </ul>
      <p>
        total R$
        {currentSale
          .reduce((valorAnterior, valorAtual) => {
            return valorAtual.price + valorAnterior;
          }, 0)
          .toFixed(2)}
      </p>
      <button onClick={() => setCurrentSale([])}> Remover todos</button>
    </div>
  );
};

export default Carrinho;
