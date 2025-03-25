import { useCallback, useState } from "react";
import { useTextContext } from "./useTextContext";

export const useTextSelect = () => {
  const { labeling, selectedLabel, setLabeling } = useTextContext();
  const [isProcessingSelection, setIsProcessingSelection] = useState(false);

  const handleSelection = useCallback(
    (textRef: React.RefObject<HTMLDivElement | null>) => {
      if (!textRef.current || !selectedLabel || isProcessingSelection) return;

      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed)
        return;

      setIsProcessingSelection(true);

      try {
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString();
        if (!selectedText) return;

        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(textRef.current);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        const start = preSelectionRange.toString().length;
        const end = start + selectedText.length;

        const updatedLabels = labeling.filter(
          (label) => !(start < label.end && end > label.start) // Проверка на пересечение
        );

        setLabeling([
          ...updatedLabels,
          {
            start,
            end,
            label: selectedLabel,
            text: selectedText,
          },
        ]);
      } finally {
        setTimeout(() => setIsProcessingSelection(false), 300);
      }
      selection.removeAllRanges();
    },
    [isProcessingSelection, labeling, selectedLabel, setLabeling]
  );

  return { handleSelection };
};
