'use client';
import { useState, useEffect } from "react";
import { ICharacterResponse } from "../core/interfaces/character.interface";

const useCustomHookFetchCharacter = (url: string) => {
  const [data, setData] = useState<ICharacterResponse>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useCustomHookFetchCharacter;