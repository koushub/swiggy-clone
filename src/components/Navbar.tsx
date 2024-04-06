import logo from "../images/logo.png";
import lens from "../images/lens.png";
import profile from "../images/profile.png";
import arrow from "../images/arrow.png";
//import cart from "../images/cart.png";
import { useState } from "react";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import out from "../images/logout.png";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type restaurantProp = {
  restaurantsList?: any
}

function Navbar(props: restaurantProp) {

  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      auth?.currentUser == null && toast.success("Logged Out Successfully");
      auth?.currentUser == null &&
      setTimeout(()=> {
        navigate("/main");
      }, 2000)
    }
    catch (err) {
      console.error(err);
      const error:any = err
      toast.error(error);
    }
  }
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
    <ToastContainer autoClose={3000}/>
      <div className="flex items-center p-3 h-20 shadow-lg w-screen">
        <img src={logo} alt="" className="w-14 h-14" />
        <h1 className="font-bold text-sm underline ml-5">Other</h1>
        {props?.restaurantsList ? <h1 className="text-sm ml-3">{props?.restaurantsList[0]?.address_obj?.city}</h1>
          : <h1 className="text-sm ml-3">Location</h1>}
        <img className="w-7 h-7 mr-56" src={arrow} alt="arrow" />
        <div className="ml-60 flex items-center">
          <Link to={"/search"} state={{ data: props?.restaurantsList }}>
            <div className="flex items-center cursor-pointer">
              <img src={lens} alt="" className="w-4 h-4 ml-96" />
              <h1 className="ml-3">Search</h1>
            </div>
          </Link>
          <img className="w-7 h-7 ml-16" src={profile} alt="profile" />
          <div className="flex items-center cursor-pointer" onClick={() => setLoginModal(true)}>
            <h1 className="ml-3">Sign In</h1>
            <div className="flex items-center cursor-pointer" onClick={logout}>
              <img className="w-5 h-5 ml-16" src={out} alt="profile" />
              <h1 className="ml-3">Logout</h1>
            </div>
          </div>
        </div>
        {loginModal && <Login setLoginModal={setLoginModal} />}
      </div>
    </>
  )
}
export default Navbar