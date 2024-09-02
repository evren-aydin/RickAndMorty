import ReactPaginate from "react-paginate";
import CharacterCard from "../components/CharacterCard";
import { useContext, useEffect, useState } from "react";
import { CharContext } from "../contexts/CharContextProvider";
import api from "../api/baseUrlApi";

function CharacterMenu() {
  const { characters, setCharacters } = useContext(CharContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // characters değiştiğinde loading kontrolü yapılıyor
    if (characters.length > 0) {
      setLoading(false);
    }
  }, [characters]);

  if (loading) {
    // Veriler yüklenirken
    return <div>Loading characters...</div>;
  }

  const fetchComments = async (currentPage) => {
    const res = await api.get(`/character/?page=${currentPage}`);

    return res.data.results;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let selectedPage = data.selected + 1;

    const charactersFormServer = await fetchComments(selectedPage);

    setCharacters(charactersFormServer);
    setCurrentPage(0);
  };
  // Gösterilecek karakterleri dilimleme işlemi
  const displayedCharacters = characters.slice(
    currentPage * 6,
    currentPage * 6 + 6
  );
  return (
    <>
      <div className="w-full h-[900px] bg-[#272b33] flex justify-center flex-col items-center gap-8">
        <div className="w-[1270px] h-[740px]  flex flex-row flex-wrap justify-center items-center gap-7">
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
          containerClassName="border-2 border-solid border-gray-400 flex gap-3 text-gray-400 items-center"
          pageClassName="relative flex items-center border-2 border-solid border-gray-400" // Her sayfanın etrafına çizgi eklemek için
          pageLinkClassName="p-2" // Sayıların görünümü
          activeClassName="text-[#ff9800] font-bold" // Aktif sayfanın görünümü
          nextLinkClassName="p-3"
          previousLinkClassName="p-2"
        />
      </div>
    </>
  );
}

export default CharacterMenu;
