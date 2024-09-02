import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharContextProvider from "./contexts/CharContextProvider";
import LocationContextProvider from "./contexts/LocationContextProvider";
import EpisodeContextProvider from "./contexts/EpisodeContextProvider";

function App() {
  return (
    <div className="overflow-x-hidden">
      <CharContextProvider>
        <LocationContextProvider>
          <EpisodeContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </EpisodeContextProvider>
        </LocationContextProvider>
      </CharContextProvider>
    </div>
  );
}

export default App;
