import { useContext, useEffect, useState } from "react";
import EpisodeCard from "../components/EpisodeCard";
import { EpisodeContext } from "../contexts/EpisodeContextProvider";
import api from "../api/baseUrlApi";
import axios from "axios";

function EpisodePage() {
  const { episodes, setEpisodes } = useContext(EpisodeContext);

  return (
    <>
      <div className="w-full h-full bg-[#272b33] flex justify-center flex-col items-center gap-8">
        <div className="w-[1270px] h-full flex flex-row flex-wrap justify-center items-center gap-7">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </>
  );
}

export default EpisodePage;
