import styles from "./FlashSales.module.css";
import Titulo from "../TituloSection/Titulo";
import Timer from "../Timer/Timer";
import Setas from "../Setas/Setas";
import Button from "../Button/Button";
const FlashSales = ({ titulo, subtitulo, timer, setas, btn, titleBtn }) => {
  return (
    <section className={styles.container}>
      <div className={styles.titleWithTimer}>
        <Titulo titulo={titulo} subtitulo={subtitulo} />
        {timer ? <Timer className={styles.timer} /> : null}
      </div>
      {setas ? <Setas /> : null}
      {btn ? <Button props={titleBtn} /> : null}
    </section>
  );
};

export default FlashSales;
