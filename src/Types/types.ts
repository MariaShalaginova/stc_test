export type Label = {
  color: string;
  label: string;
};

export type TextLabel = {
  start: number; // начало фрагмента
  end: number; // конец фрагмента
  label: string; // метка
  text: string;
};

export type TextLabelingProps = {
  labels: Label[];
  text: string;
  labeling: TextLabel[];
  // onChange?: (newLabeling: TextLabel[]) => void;
  selectedLabel: string | null;
  addTextLabel: (start: number, end: number, selectedText: string) => void;
  selectLabel: (label: string) => void;
  setLabeling: (labeling: TextLabel[]) => void;
};

export type HighlightedTextProps = Pick<
  TextLabelingProps,
  "text" | "labels" | "labeling"
>;
