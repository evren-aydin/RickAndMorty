import Netlify from "../assets/netlify-light.svg";
import Stellate from "../assets/stellate-light.svg";
function Footer() {
  return (
    <>
      <footer className="w-full h-[390px] bg-[#202329] flex items-center">
        <div className="w-full h-[240px]  flex flex-col items-center justify-center gap-6">
          <div className=" w-[400px] h-[45px] flex flex-row gap-3 text-sm justify-center flex-wrap">
            <a
              href="https://rickandmortyapi.com/api/character"
              className="font-bold text-[#92999e] hover:text-[#ff9800]"
            >
              CHARACTER :826
            </a>
            <a
              href="https://rickandmortyapi.com/api/location"
              className="font-bold text-[#92999e] hover:text-[#ff9800]"
            >
              LOCATION :126
            </a>
            <a
              href="https://rickandmortyapi.com/api/episode"
              className="font-bold text-[#92999e] hover:text-[#ff9800]"
            >
              EPISODE :51
            </a>
            <a
              href=""
              className="font-bold text-[#92999e] hover:text-[#ff9800] flex items-center gap-2"
            >
              SERVER STATUS{" "}
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </a>
          </div>
          <div className=" w-[400px] h-[45px] flex flex-row gap-10 text-sm justify-center items-center ">
            <img
              src={Netlify}
              alt="Icon 1"
              className="w-30 h-30 cursor-pointer"
            />
            <img
              src={Stellate}
              alt="Icon 2"
              className="w-30 h-30 cursor-pointer"
            />
          </div>
          <div className=" w-[400px] h-[45px] flex flex-row gap-10 text-sm justify-center items-center"></div>
          <div className=" w-[400px] h-[45px] flex flex-row gap-10 text-sm justify-center items-center ">
            <p className="text-[#92999e]">
              by{" "}
              <a
                href=""
                className="font-bold text-sm text-white hover:text-[#ff9800]"
              >
                Axel Fuhrmann
              </a>{" "}
              2024{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
