import { useCallback, useMemo, useState } from "react";

export const useCompanyCreation = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const reset = useCallback(() => {
    setName("");
    setAddress("");
  }, []);

  const treatedName = useMemo(() => name.replaceAll(" ", ""), [name]);
  const treatedAddress = useMemo(() => address.replaceAll(" ", ""), [address]);

  const isValid: boolean = useMemo(
    () => !!treatedName && !!treatedAddress,
    [treatedName, treatedAddress]
  );

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
