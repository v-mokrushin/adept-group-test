import { useState } from "react";

export const useCompanyCreation = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const reset = () => {
    setName("");
    setAddress("");
  };

  const treatedName = () => name.replaceAll(" ", "");
  const treatedAddress = () => address.replaceAll(" ", "");

  const isValid: boolean = !!treatedName && !!treatedAddress;

  return {
    name,
    setName,
    address,
    setAddress,
    reset,
    treatedName,
    treatedAddress,
    isValid,
  };
};
