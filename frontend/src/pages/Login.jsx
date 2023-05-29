import appContext from '../context/appContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from 'axios';

import backgroundImage from './ship_wallpaper.jpg';

function Login() {
  const { username, setUsername, password, setPassword } = useContext(appContext);
  const history = useNavigate();


  const handleChange = ({target}) => {
    if (target.name === "username") setUsername(target.value);
    else setPassword(target.value)
  }

  const clickRegisterUser = () => {
    history("/register-user");
  }

  const clickLogin = () => {
    Axios.post('http://192.168.1.106:3001/login', {
      username,
      password
    }).then((resp) => {
      localStorage.setItem('token', resp.data);
      history('/home');
    }).catch((err) => toast.error(err.response.data));
  }

  return (
    <div
      className='flex flex-col min-h-screen w-screen items-center justify-center'
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',  
        backgroundPosition: 'center top' 
      }}
    >
      <div className="w-full max-w-sm bg-opacity-50 backdrop-filter backdrop-blur-lg border rounded-3xl">
        <img src='./logo_msc.png' alt='logo msc' className="mx-auto mt-8 w-32" />
        <div className='px-8 py-6'>
          <input
            name='username'
            className='w-full mb-4 px-4 py-2 rounded-md text-center'
            type="text"
            placeholder='Username'
            onChange={handleChange}
          />
          <input
            name='password'
            className='w-full mb-4 px-4 py-2 rounded-md text-center'
            type="password"
            placeholder='Password'
            onChange={handleChange}
          />
          <button
          onClick={clickLogin} 
          className="w-full px-4 py-2 rounded-md bg-blue-500 text-white"
          >
            Login
          </button>
        </div>
      </div>
      <p className="font-bold text-white text-center w-full mt-52 px-4 py-2 text-xl">Not registered yet ?</p>
      <button
        onClick={clickRegisterUser} 
        className="w-64 px-4 py-2 rounded-md bg-blue-500 text-white underline"
      >
        Register Here !
      </button>
    </div>
  );
}

export default Login;