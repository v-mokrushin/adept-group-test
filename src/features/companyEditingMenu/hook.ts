import { useState } from "react";

type TOnSaveFunc = (newValue: string) => void;

export const useEditCompany = () => {
  const [event, setEvent] = useState<React.MouseEvent | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [initialValue, setInitialValue] = useState<string>("");
  const [onSave, setOnSave] = useState<Function>(() => () => {});

  const open = (e: React.MouseEvent, initValue: string, onSave: Function) => {
    setEvent(e);
    console.debug(e);
    setIsMenuVisible(true);
    setInitialValue(initValue);
    setOnSave(() => onSave);
  };

  const close = () => {
    setEvent(null);
    setIsMenuVisible(false);
  };

  return {
    isMenuVisible,
    setIsMenuVisible,
    initialValue,
    open,
    close,
    event,
    onSave,
  };
};

export type IUseEditCompany = ReturnType<typeof useEditCompany>;
