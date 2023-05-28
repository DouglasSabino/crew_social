import appContext from '../context/appContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from 'axios';


function Login() {

  const { username } = useContext(appContext);
  return (<h1 className='text-3xl bg-red-600'>{username}</h1>);
}

export default Login;