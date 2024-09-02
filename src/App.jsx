import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CharContextProvider from "./contexts/CharContextProvider";
import LocationContextProvider from "./contexts/LocationContextProvider";
import EpisodeContextProvider from "./contexts/EpisodeContextProvider";
import LocationPage from "./pages/LocationPage";
import EpisodePage from "./pages/EpisodePage";

function App() {
  return (
    <div className="overflow-x-hidden">
      <CharContextProvider>
        <LocationContextProvider>
          <EpisodeContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/episode" element={<EpisodePage />} />
            </Routes>
          </EpisodeContextProvider>
        </LocationContextProvider>
      </CharContextProvider>
    </div>
  );
}

export default App;
