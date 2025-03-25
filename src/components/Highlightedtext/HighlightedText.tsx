import React from "react";
import { HighlightedTextProps } from "../../Types/types";

const HighlightedText: React.FC<HighlightedTextProps> = React.memo(
  ({ text, labels, labeling }) => {
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
  }
);

export default HighlightedText;
