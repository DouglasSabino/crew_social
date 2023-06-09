import appContext from "../context/appContext";
import { useContext } from "react";
import Header from "../components/Header";
import Meetings from "../components/Meetings";
import Axios from "axios";
import { useEffect } from "react";

function Home() {
  const { setIsMenuOpen, isMenuOpen, isAnimating, setIsAnimating } =
    useContext(appContext);

  useEffect(() => {
    const decoderUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const resp = await Axios.post(
          "http://192.168.1.106:3001/login/validateToken",
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const { id, username, spokenLanguages } = resp.data;
        localStorage.setItem("id", id);
        localStorage.setItem("username", username);
        localStorage.setItem("spokenLanguages", spokenLanguages);
      } catch (error) {
        console.log(error);
      }
    };

    decoderUser();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAnimating(true);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="w-full h-screen bg-[#A1A29C] relative">
      <Header user={localStorage.getItem("username")} toggleMenu={toggleMenu} />
      <div className="relative z-10">
        <div
          className={`menu-lateral ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } ${isAnimating ? "transition-transform" : ""}`}
          onTransitionEnd={handleTransitionEnd}
        >
          <ul className="h-screen pl-0 w-56 bg-[#13183B] text-white rounded-sm shadow-lg shadow-white absolute top-0">
            <li className="font-bold px-11 py-6 text-2xl shadow-sm shadow-black">
              Meetings
            </li>
            <li className="font-bold px-11 py-6 text-2xl shadow-sm shadow-black">
              Chat
            </li>
            <li className="font-bold px-11 py-6 text-2xl shadow-sm shadow-black">
              Social
            </li>
          </ul>
        </div>
      </div>
      <Meetings />
    </div>
  );
}

export default Home;
