import setas_dir from "../../assets/right_arrow.png";
import setas_esq from "../../assets/left_arrow.png";
import styles from "./Setas.module.css";

const Setas = () => {
  return (
    <div className={styles.setas} >
      <img src={setas_esq} alt="" />
      <img src={setas_dir} alt="" />
    </div>
  );
};

export default Setas;
