import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../api/baseUrlApi";

export const CharContext = createContext([]);

function CharContextProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get("/character/?page=1")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching characters:", error);
      });
  }, []);
  return (
    <CharContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharContext.Provider>
  );
}

export default CharContextProvider;
