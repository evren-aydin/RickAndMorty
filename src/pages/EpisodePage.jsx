import { useContext, useEffect } from "react";
import EpisodeCard from "../components/EpisodeCard";
import { EpisodeContext } from "../contexts/EpisodeContextProvider";
import { useNavigate } from "react-router-dom";
import api from "../api/baseUrlApi";

function EpisodePage() {
  const { episodes, setEpisodes } = useContext(EpisodeContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Kullanıcıyı bir önceki sayfaya yönlendirir
  };

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      const allEpisodes = [];
      let totalPages = 3;

      for (let i = 1; i <= totalPages; i++) {
        const response = await api.get(`/episode?page=${i}`);
        allEpisodes.push(...response.data.results);
      }

      setEpisodes(allEpisodes);
    };
    fetchAllEpisodes();
  }, []);
  return (
    <>
      <div className="flex gap-3 bg-[#272b33] pt-7 pl-24">
        <button
          onClick={handleGoBack}
          className=" text-white rounded font-bold hover:bg-[#ff9800] hover:text-black"
        >
          <img src="/rm512.png" alt="Logo" className="h-14 w-auto" />
        </button>
      </div>
      <div className="w-full h-full bg-[#272b33] flex justify-center flex-col items-center gap-8">
        <div className="w-[1270px] h-full flex flex-row flex-wrap justify-center items-center gap-7 lm:w-[600px]">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </>
  );
}

export default EpisodePage;
