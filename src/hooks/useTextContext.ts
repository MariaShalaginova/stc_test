import { useContext } from "react";
import { TextLabelingProps } from "../Types/types";
import { TextContext } from "../context/TextContext";

export const useTextContext = (): TextLabelingProps => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useTextContext error");
  }
  return context;
};
