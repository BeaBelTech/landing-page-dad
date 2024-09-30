import styles from "./Titulo.module.css";
import bloco from '../../assets/bloco-rosa.png'


const Titulo = ({titulo, subtitulo}) => {
  return (
    <title className={styles.title}>
      <p className={styles.p}>
        <img src={bloco} alt="" />
        {subtitulo}
      </p>
      <h2>{titulo}</h2>
    </title>
  );
};

export default Titulo;
