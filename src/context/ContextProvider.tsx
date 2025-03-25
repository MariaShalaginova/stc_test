import React, { useCallback, useMemo, useState } from "react";
import { TextLabel } from "../Types/types";
import { MOCK_LABELS, MOCK_TEXT } from "../mock";
import { TextContext } from "./TextContext";

export const ContextProvider: React.FC<{
  children: React.ReactNode;
  initialText?: string;
}> = ({ children, initialText = MOCK_TEXT }) => {
  const [text] = useState(initialText);
  const [labeling, setLabeling] = useState<TextLabel[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const selectLabel = useCallback((label: string) => {
    setSelectedLabel(label);
  }, []);

  const addTextLabel = useCallback(
    (start: number, end: number, selectedText: string) => {
      if (!selectedLabel) return;

      setLabeling((prev) => [
        ...prev,
        {
          start,
          end,
          label: selectedLabel,
          text: selectedText,
        },
      ]);
    },
    [selectedLabel]
  );

  const value = useMemo(
    () => ({
      text,
      labeling,
      labels: MOCK_LABELS,
      selectedLabel,
      selectLabel,
      addTextLabel,
      setLabeling,
    }),
    [text, labeling, selectedLabel, selectLabel, addTextLabel]
  );

  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};
