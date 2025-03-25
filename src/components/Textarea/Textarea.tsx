import React, { useCallback, useRef } from "react";
import styles from "./Textarea.module.scss";
import { useTextContext } from "../../hooks/useTextContext";
import HighlightedText from "../Highlightedtext/HighlightedText";
import { useTextSelect } from "../../hooks/useTextSelect";

const Textarea: React.FC = () => {
  const { text, labeling, labels } = useTextContext();
  const textRef = useRef<HTMLDivElement>(null);
  const { handleSelection } = useTextSelect();

  const handleMouseUp = useCallback(() => {
    if (textRef.current) {
      handleSelection(textRef);
    }
  }, [handleSelection]);

  //   console.log(labeling);

  return (
    <div className={styles.container}>
      <h1>Документ</h1>
      <div className={styles.container__hr}></div>
      <div
        ref={textRef}
        onMouseUp={handleMouseUp}
        className={styles.container__text}
      >
        <HighlightedText
          text={text || ""}
          labels={labels}
          labeling={labeling}
        />
      </div>
    </div>
  );
};

export default React.memo(Textarea);
