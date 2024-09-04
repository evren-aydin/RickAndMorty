import ReactPaginate from "react-paginate";
import CharacterCard from "../components/CharacterCard";
import { useContext, useEffect, useState } from "react";
import { CharContext } from "../contexts/CharContextProvider";
import api from "../api/baseUrlApi";

function CharacterMenu() {
  const { characters, setCharacters } = useContext(CharContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Başlangıçta boş olacak
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Sayfa ilk yüklendiğinde ilk sayfa karakterlerini getirme
    const loadInitialCharacters = async () => {
      const initialCharacters = await fetchComments(1);
      setCharacters(initialCharacters);
      setFilteredCharacters(initialCharacters); // İlk yüklemede karakterleri göster
      setLoading(false);
    };

    loadInitialCharacters();
  }, [setCharacters]);

  useEffect(() => {
    // characters değiştiğinde loading kontrolü yapılıyor ve filteredCharacters güncelleniyor
    if (characters.length > 0) {
      setFilteredCharacters(characters);
    }
  }, [characters]);

  const searchHandler = () => {
    // Arama işlemi
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const fetchComments = async (page) => {
    // API'den belirtilen sayfadaki karakterleri çekme işlemi
    const res = await api.get(`/character/?page=${page}`);
    return res.data.results;
  };

  const handlePageClick = async (data) => {
    // Sayfa değiştirildiğinde çalışacak fonksiyon
    console.log(data.selected);
    let selectedPage = data.selected + 1;
    const charactersFromServer = await fetchComments(selectedPage);
    setCharacters(charactersFromServer);
    setCurrentPage(0);
  };

  // Gösterilecek karakterleri dilimleme işlemi
  const displayedCharacters = filteredCharacters.slice(
    currentPage * 6,
    currentPage * 6 + 6
  );

  if (loading) {
    // Veriler yüklenirken
    return <div>Loading characters...</div>;
  }

  return (
    <>
      <div className="w-full h-[900px] bg-[#272b33] flex justify-center flex-col items-center gap-8 md:h-[1800px] lm:h-[2900px] lm:gap-2">
        <div className="flex gap-3 mt-3 ">
          <input
            type="text"
            className="w-96 hover:border-[#ff9800] hover:border-4 lm:w-[200px]"
            placeholder="search.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-4 py-1 text-black bg-white rounded font-bold hover:bg-[#ff9800] hover:text-white"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>

        <div className="w-[1270px] h-[740px] flex flex-row flex-wrap justify-center items-center gap-7 md:w-[700px] md:h-[1480px] lm:h-[2700px] lm:w-[200px]">
          {displayedCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={25}
          marginPagesDisplayed={4}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="border-2 border-solid border-gray-400 flex gap-3 text-gray-400 items-center lm:mt-28 lm:text-xs lm:gap-0"
          pageClassName="relative flex items-center border-2 border-solid border-gray-400"
          pageLinkClassName="p-2"
          activeClassName="text-[#ff9800] font-bold"
          nextLinkClassName="p-3"
          previousLinkClassName="p-2"
        />
      </div>
    </>
  );
}

export default CharacterMenu;
