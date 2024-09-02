import { useEffect, useState } from "react";
import axios from "axios";

function CharacterCard({ character }) {
  const [firstSeenEpisode, setFirstSeenEpisode] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`${character.episode[0]}`);

      setFirstSeenEpisode(res.data.name);
    };
    fetchComments();
  }, [character.episode]);

  return (
    <>
      <div className=" rounded-xl bg-[#3c3e44] w-[600px] h-[220px] flex flex-row gap-4">
        <img
          src={character.image}
          className="w-[230px] h-[220px] rounded-l-xl"
        />
        <div className="w-[360px] h-[220px] rounded-r-xl flex flex-col gap-4  justify-center">
          <div className="w-[350px] h-[60px]  flex flex-col text-white">
            <a href="">
              <h1 className="text-2xl font-extrabold hover:text-[#ff9800]">
                {character.name}
              </h1>
            </a>

            <div className="flex flex-row items-center text-sm gap-1 font-semibold ">
              <div
                className={`w-2 h-2 rounded-full ${
                  character.status === "Alive" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <p>
                {character.status} - {character.species}
              </p>
            </div>
          </div>

          <div className="w-[350px] h-[60px] flex flex-col text-white">
            <p className=" text-[#9e9990] font-semibold ">
              Last known location:
            </p>
            <a href="">
              <p className="text-lg hover:text-[#ff9800]">
                {character.location.name}
              </p>
            </a>
          </div>

          <div className="w-[350px] h-[60px]  flex flex-col text-white">
            <p className=" text-[#9e9990] font-semibold ">First seen in:</p>
            <a href="">
              <p className="text-lg hover:text-[#ff9800]">{firstSeenEpisode}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
