import { useTextContext } from "../../hooks/useTextContext";
import styles from "./Marks.module.scss";

const Marks: React.FC = () => {
  const { labels, selectedLabel, selectLabel } = useTextContext();

  return (
    <div className={styles.container}>
      <h1>Метки</h1>
      <div className={styles.container__hr}></div>
      <div className={styles.container__marks}>
        {labels.map((item) => (
          <button
            key={item.label}
            onClick={() => selectLabel(item.label)}
            className={` ${selectedLabel === item.label ? styles.clicked : ""}`}
          >
            <div
              className={styles.container__marks_square}
              style={{ backgroundColor: item.color }}
            ></div>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marks;
