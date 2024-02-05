import { Routes,Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="w-screen min-h-screen bg-blue-500 flex flex-col font-inter">
    
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
