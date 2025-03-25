import { createContext } from "react";
import { TextLabelingProps } from "../Types/types";
import { MOCK_LABELS, MOCK_TEXT } from "../mock";

export const defaultContextValue: TextLabelingProps = {
  text: MOCK_TEXT,
  labels: MOCK_LABELS,
  labeling: [],
  selectedLabel: null,
  selectLabel: () => {},
  addTextLabel: () => {},
};

export const TextContext =
  createContext<TextLabelingProps>(defaultContextValue);
