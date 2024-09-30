import NavBar from '../NavBar/NavBar'
import styles from './Header.module.css'
import search_icon from '../../assets/search.svg'
import favorite_icon from '../../assets/favorite_icon.svg'
import shopping_car from '../../assets/shopping_car.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>Exclusive</h1>
        <NavBar/>
        <div className={styles.search_icons}>
            <label htmlFor="" className={styles.search}>
                <input type="text" placeholder="What are you looking for?" className={styles.input}/>
                <img src={search_icon} alt="ícone de lupa" />
            </label>
            <img src={favorite_icon} alt="ícone de favorito" />
            <img src={shopping_car} alt="ícone de carrinho de compras" />            
        </div>
    </header>
  )
}

export default Header