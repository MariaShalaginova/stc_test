import React, { useState } from "react";
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

  const selectLabel = (label: string) => {
    setSelectedLabel(label);
  };

  const addTextLabel = (start: number, end: number, selectedText: string) => {
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
  };

  return (
    <TextContext.Provider
      value={{
        text,
        labels: MOCK_LABELS,
        labeling,
        selectedLabel,
        selectLabel,
        addTextLabel,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
