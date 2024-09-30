import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <li className={styles.home}>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
    </nav>
  )
}

export default NavBar