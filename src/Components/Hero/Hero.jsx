import styles from './Hero.module.css'
import hero1 from '../../assets/hero1.png'

const Hero = () => {
  return (
    <div className={styles.container}>
        <img src={hero1} alt="" className={styles.hero1}/>
    </div>
  )
}

export default Hero