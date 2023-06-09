import ContextProvider from "./context/contextProvider";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegiterUser";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </Router>

        <ToastContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
