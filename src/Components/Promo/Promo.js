import styles from './Promo.module.css'
function Promo() {
    return (
        <div className={styles.fundo}>
            <p className={styles.texto}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
                <a href="">ShopNow</a>
            </p>
            <div className={styles.seta}>
                <select name="" className={styles.select}>
                    <option value="portugues">Português</option>
                    <option value="ingles">Inglês</option>
                </select>
            </div>
        </div>
    )
}

export default Promo