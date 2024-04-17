import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Login from "./Component/Pages/Login";
import SignUp from "./Component/Pages/SignUp";
import ForgotPass from "./Component/Pages/ForgotPass";
import Dashboard from "./Component/Pages/Dashboard";
import CardView from "./Component/Pages/CardView";
import CardAdd from "./Component/Pages/CardAdd";
import './app.css';


function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/signup" exact element={<SignUp/>}/>
      <Route path="/forgotpassword" exact element={<ForgotPass/>}/>
      <Route path="/dashboard" exact element={<Dashboard/>}/>
      <Route path="/cardview" exact element={<CardView/>}/>
      <Route path="/cardadd" exact element={<CardAdd/>}/>

    </Routes>
    </>
  );
}

export default App;
