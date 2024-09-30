import styles from "./Product.module.css";

const Product = ({product, titulo, desconto, preco, estrelas, qtd_estrelas, cor, cor_selected, cor2}) => {
  return (
    <div className={styles.container}>
      <img src={product} alt="" />
      <h5 className={styles.titulo}>{titulo}</h5>
      <div className={styles.preco}>
        <p className={styles.desconto}>${desconto}</p>
        <p className={styles.sem_desconto}>{preco}</p>
      </div>
      <div className={styles.estrelas}>
        <img src={ estrelas } alt="" />
        <p className={styles.qtd_estrelas}>({qtd_estrelas})</p>
      </div>
      {cor ? (
        <div className={styles.cores}>
          <img src={cor_selected}/>
          <img src={cor2}/>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default Product;
