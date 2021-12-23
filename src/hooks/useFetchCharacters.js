import { useState } from "react";

export const useFetchCharacters = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [characters, setcharacters] = useState([]);
  const [info, setinfo] = useState({})

  const fetchCharacters = async (url) => {
     await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results);
        setinfo(data.info);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  };

  return {
    isLoading,
    characters,
    info,
    fetchCharacters
  }
}