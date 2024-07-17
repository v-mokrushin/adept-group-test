import { useState } from "react";

type TOnSaveCallback = (newValue: string) => void;

export const useUpdateCompany = () => {
  const [event, setEvent] = useState<React.MouseEvent | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [initialValue, setInitialValue] = useState<string>("");
  const [onSave, setOnSave] = useState<TOnSaveCallback>(() => () => {});

  const open = (
    e: React.MouseEvent,
    initValue: string,
    onSave: TOnSaveCallback
  ) => {
    setEvent(e);
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

export type IUseEditCompany = ReturnType<typeof useUpdateCompany>;
