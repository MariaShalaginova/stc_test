import React, { useRef } from "react";
import styles from "./Textarea.module.scss";
import { useTextContext } from "../../hooks/useTextContext";

const Textarea: React.FC = () => {
  const { text, labeling, labels, addTextLabel, selectedLabel } =
    useTextContext();
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseUp = () => {
    if (!textRef.current || !selectedLabel) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed)
      return;

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    if (!selectedText) return;

    // Точный расчет позиций
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(textRef.current);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;
    const end = start + selectedText.length;

    addTextLabel(start, end, selectedText);
    selection.removeAllRanges();
  };
  const renderHighlightedText = (): React.ReactNode => {
    if (!text) return null;

    let lastPos = 0;
    const elements: React.ReactElement[] = [];
    const sortedLabels = [...labeling].sort((a, b) => a.start - b.start);

    sortedLabels.forEach((item, index) => {
      // Текст до выделения
      if (item.start > lastPos) {
        elements.push(
          <span key={`before-${index}`}>
            {text.substring(lastPos, item.start)}
          </span>
        );
      }

      // Выделенный текст
      const labelColor =
        labels.find((l) => l.label === item.label)?.color || "yellow";
      elements.push(
        <span
          key={`highlight-${index}`}
          style={{ backgroundColor: labelColor }}
        >
          {text.substring(item.start, item.end)}
        </span>
      );

      lastPos = item.end;
    });

    // Остаток текста
    if (lastPos < text.length) {
      elements.push(<span key="remaining">{text.substring(lastPos)}</span>);
    }

    return elements;
  };

  return (
    <div className={styles.container}>
      <h1>Документ</h1>
      <div className={styles.container__hr}></div>
      <div
        ref={textRef}
        onMouseUp={handleMouseUp}
        style={{
          whiteSpace: "pre-wrap",
          lineHeight: "1.5",
          userSelect: "text",
        }}
      >
        {renderHighlightedText() || text}
      </div>
    </div>
  );
};

export default Textarea;
