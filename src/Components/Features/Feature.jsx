import styles from './Feature.module.css'

const Feature = ({topic, about, more_about}) => {
  return (
    <div className={styles.container}>
        <img src={topic} alt="" className={styles.img} />
        <h4>{about}</h4>
        <p>{more_about}</p>
    </div>
  )
}

export default Feature