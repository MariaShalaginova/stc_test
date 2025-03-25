export type Label = {
  color: string;
  label: string;
};

export type TextLabel = {
  start: number; // начало фрагмента
  end: number; // конец фрагмента
  label: string; // метка
};

export type TextLabelingProps = {
  labels: Label[];
  text: string;
  labeling: TextLabel[];
  onChange?: (newLabeling: TextLabel[]) => void;
  selectedLabel: string | null;
  addTextLabel: (start: number, end: number, selectedText: string) => void;
  selectLabel: (label: string) => void;
};
