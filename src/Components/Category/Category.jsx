import styles from './Category.module.css'


const Category = ({product_image, product_title, selected}) => {
  return (
    <div className={selected ? (styles.container_selected) : (styles.container)}>
        <img src={product_image} className={selected ? (styles.img_selected) : (styles.img)} alt="" />
        <h3 className={styles.product_title}>{product_title}</h3>
    </div>
  )
}

export default Category