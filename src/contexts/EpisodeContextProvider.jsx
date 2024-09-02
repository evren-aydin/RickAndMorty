import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../api/baseUrlApi";

export const EpisodeContext = createContext([]);

function EpisodeContextProvider({ children }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api
      .get("/episode")
      .then((response) => {
        setEpisodes(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching characters:", error);
      });
  }, []);
  return (
    <EpisodeContext.Provider value={{ episodes }}>
      {children}
    </EpisodeContext.Provider>
  );
}

export default EpisodeContextProvider;
