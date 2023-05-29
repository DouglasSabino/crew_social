import Header from "../components/Header";
import { toast } from 'react-toastify';
import Axios from "axios";
import { useEffect } from "react";

function Home() {

  useEffect(() => async () => {
    await decoderUser();
  }, []);

  const decoderUser = async () => {
    const token = localStorage.getItem('token');
    Axios.post('http://192.168.1.106:3001/login/validateToken',{} ,{
        headers: {
            "Authorization": token
        }
    }).then((resp) => {
      toast.success('Welcome ' + resp.data.username + " 🤗");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
  <div className="w-full h-screen bg-[#A1A29C]">
    <Header />
  </div>
  );
}

export default Home;