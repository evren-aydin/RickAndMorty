import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="w-full h-[60px] flex justify-center ">
        <div className="w-[1450px] h-full flex justify-between items-center">
          <div className="flex items-center justify-center h-screen lm:ml-40 ">
            <a href="/">
              <img src="/rm512.png" alt="Logo" className="h-10 w-auto" />
            </a>
          </div>
          <div className="w-[495px] h-[45px] flex flex-row items-center gap-8 lm:gap-3 ">
            <Link
              to="/location"
              className="text-xl font-bold text-[#333333] hover:text-[#ff9800] lm:text-xs"
            >
              Location
            </Link>
            <Link
              to="/episode"
              className="text-xl font-bold text-[#333333] hover:text-[#ff9800] lm:text-xs"
            >
              Episode
            </Link>
            <a
              href="#"
              className="text-xl font-bold text-[#333333] hover:text-[#ff9800] lm:text-xs"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-xl font-bold text-[#333333] hover:text-[#ff9800] lm:text-xs"
            >
              About
            </a>
            <a href="https://rickandmortyapi.com/support-us">
              <button className="bg-white hover:bg-[#ff9800] hover:text-white lm:text-xs font-bold text-[#333333] text-sm border-solid p-2 border-2 border-[#ff9800] rounded-lg">
                SUPPORT US
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
