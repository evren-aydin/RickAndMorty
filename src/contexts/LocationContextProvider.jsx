import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../api/baseUrlApi";

export const LocationContext = createContext([]);

function LocationContextProvider({ children }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    api
      .get("/location")
      .then((response) => {
        setLocations(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching characters:", error);
      });
  }, []);
  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;
