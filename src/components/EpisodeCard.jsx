import axios from "axios";
import { useEffect, useState } from "react";

function EpisodeCard({ episode }) {
  const [characterNames, setCharacterNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // episode.characters dizisindeki tüm URL'lere istek yapıyoruz
        const requests = episode.characters.map((characterUrl) => {
          // URL'nin geçerliliğini kontrol edebiliriz
          if (characterUrl) {
            return axios.get(characterUrl);
          } else {
            console.warn(`Invalid URL: ${characterUrl}`);
            return null;
          }
        });

        // Geçersiz istekleri kaldırmak için filtreleme yapıyoruz
        const validRequests = requests.filter((request) => request !== null);

        // Tüm istekler tamamlandığında sonuçları topluyoruz
        const responses = await Promise.all(validRequests);

        // Gelen verilerden karakter isimlerini alıyoruz
        const names = responses.map((response) => response.data.name);
        setCharacterNames(names);
      } catch (error) {
        console.error("Error fetching character names:", error);
        // Hata detaylarını kontrol etmek için
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };

    fetchData();
  }, [episode]);

  return (
    <div className="rounded-xl bg-gray-950 w-[750px] h-[380px] flex flex-row gap-4">
      <div className="w-[725px] h-[380px] ml-1 bg-[#3c3e44] rounded-xl flex flex-col pt-6">
        <div className="w-[650px] h-[60px] mb-10 flex flex-col text-white">
          <a href="">
            <h1 className="text-2xl pl-5 font-extrabold hover:text-[#ff9800]">
              {episode.name} -{" "}
              <span className="text-[#ff9800]">{episode.id}</span>
            </h1>
          </a>

          <div className="flex flex-row pl-5 items-center text-sm gap-1 font-semibold ">
            <p>{episode.air_date}</p>
          </div>
        </div>

        <div className="w-[650px] h-[60px] pl-5 flex flex-col text-white">
          <p className="text-[#9e9990] font-semibold">Episode</p>
          <a href="">
            <p className="text-lg hover:text-[#ff9800]">{episode.episode}</p>
          </a>
        </div>

        <div className="w-[725px] h-[60px] flex flex-wrap text-white pl-5 items-center gap-1">
          <p className="text-[#9e9990] font-semibold">Character names : </p>
          {characterNames.map((name, index) => (
            <p key={index} className="text-xs ">
              {name},
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard;
