import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/baseUrlApi";
import { LocationContext } from "../contexts/LocationContextProvider";
import LocationCard from "../components/LocationCard";

function LocationPage() {
  const { locations, setLocations } = useContext(LocationContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Kullanıcıyı bir önceki sayfaya yönlendirir
  };

  useEffect(() => {
    const fetchAllLocations = async () => {
      const allLocations = [];
      let totalPages = 7;

      for (let i = 1; i <= totalPages; i++) {
        const response = await api.get(`/location?page=${i}`);
        allLocations.push(...response.data.results);
      }

      setLocations(allLocations);
    };
    fetchAllLocations();
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
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationPage;
