import appContext from "../context/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";

import backgroundImage from "./ship_wallpaper.jpg";

function Login() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    confPassword,
    setConfPassword,
    spokenLanguages,
    setSpokenLanguages,
  } = useContext(appContext);

  const history = useNavigate();

  const handleChange = ({ target }) => {
    if (target.name === "username") setUsername(target.value);
    else if (target.name === "password") setPassword(target.value);
    else setConfPassword(target.value);
  };

  const clickRegisterUser = () => {
    if (password !== confPassword) return toast.error("The passwords must be equals");
    console.log(spokenLanguages);
    if (spokenLanguages.length > 0) {
      const languages = JSON.stringify(spokenLanguages);
      Axios.post("http://192.168.1.106:3001/users/register", {
        username,
        password,
        spokenLanguages: languages,
      })
        .then((resp) => {
          toast.success(resp.data.message);
          history("/");
        })
        .catch((err) => toast.error(err.response.data));
    }else {
      return toast.error("Please speak the languages you can speak");
    }
  };

  const languagesSelect = ({ target }) => {
    console.log(target.checked);
    if (!target.checked) {
      const languagesList = spokenLanguages.filter((e) => e !== target.name);
      setSpokenLanguages(languagesList);
    } else {
    const languagesList = [...spokenLanguages, target.name];
    setSpokenLanguages(languagesList);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen w-screen items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="w-full max-w-sm bg-opacity-50 backdrop-filter backdrop-blur-lg border rounded-3xl">
        <img
          src="./logo_msc.png"
          alt="logo msc"
          className="mx-auto mt-8 w-32"
        />
        <div className="px-8 py-6">
          <input
            name="username"
            className="w-full mb-4 px-4 py-2 rounded-md text-center font-bold"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="password"
            className="w-full mb-4 px-4 py-2 rounded-md text-center font-bold"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            name="conf-password"
            className="w-full mb-4 px-4 py-2 rounded-md text-center font-bold"
            type="password"
            placeholder="Confirme Password"
            onChange={handleChange}
          />
          <h2 className="text-center font-bold">Spoken Languages</h2>
          <div className="w-full mb-4 px-4 py-2 rounded-md text-center flex">
            <div className="w-1/2">
              <ul className="text-left">
                <li>
                  <input
                    onClick={languagesSelect}
                    className="mr-2"
                    type="checkbox"
                    name="portuguese"
                  />
                  Portuguese 🇧🇷
                </li>
                <li>
                  <input
                    onClick={languagesSelect}
                    className="mr-2"
                    type="checkbox"
                    name="english"
                  />
                  English 🇺🇸
                </li>
                <li>
                  <input
                    onClick={languagesSelect}
                    className="mr-2"
                    type="checkbox"
                    name="spanish"
                  />
                  Spanish 🇪🇸
                </li>
                <li>
                  <input
                    onClick={languagesSelect}
                    className="mr-2"
                    type="checkbox"
                    name="russian"
                  />
                  Russian 🇷🇺
                </li>
                <li>
                  <input
                    onClick={languagesSelect}
                    className="mr-2"
                    type="checkbox"
                    name="franch"
                  />
                  Franch 🇫🇷
                </li>
                <li>
                  <input
                    onClick={languagesSelect}
                    className="mr-2"
                    type="checkbox"
                    name="filipino"
                  />
                  Filipino 🇵🇭
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="text-right">
                <li>
                  🇮🇹 Italian
                  <input
                    onClick={languagesSelect}
                    className="ml-2"
                    type="checkbox"
                    name="italian"
                  />
                </li>
                <li>
                  🇨🇳 Chinese
                  <input
                    onClick={languagesSelect}
                    className="ml-2"
                    type="checkbox"
                    name="chinese"
                  />
                </li>
                <li>
                  🇯🇵 Japanese
                  <input
                    onClick={languagesSelect}
                    className="ml-2"
                    type="checkbox"
                    name="japanese"
                  />
                </li>
                <li>
                  🇰🇷 Corean
                  <input
                    onClick={languagesSelect}
                    className="ml-2"
                    type="checkbox"
                    name="corean"
                  />
                </li>
                <li>
                  🇻🇳 Vietnamese
                  <input
                    onClick={languagesSelect}
                    className="ml-2"
                    type="checkbox"
                    name="vietnamese"
                  />
                </li>
                <li>
                  🇩🇪 German
                  <input
                    onClick={languagesSelect}
                    className="ml-2"
                    type="checkbox"
                    name="german"
                  />
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={clickRegisterUser}
            className="w-full px-4 py-2 rounded-md bg-blue-500 text-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
