import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userProfile from "../assets/user.png";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


const Navbar = () => {
  const { user,logOut } = use(AuthContext);
  const navigate=useNavigate()

  const handleLogout=()=>{
    logOut().then(()=>{
      toast('Logout successfully')
      setTimeout(()=>{
        navigate('/auth/login')
      },1500)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const links = (
    <>
      <div className="flex flex-col lg:flex-row  text-[20px]  gap-5 font-semibold ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {
          user&& (
            <>
            
            <NavLink to='/my-profile'>
            My Profile
            </NavLink>
            </>
          )
        }
      </div>
    </>
  );
  return (
    <div className="navbar   bg-[#121212]  border-b border-[#BB86FC]/40 shadow-sm md:ml-30  md:w-[1200px] lg:mx-auto mt-10 text-white">
      <div className="navbar-start ">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  text-black"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="flex  items-center sm:gap-5 ">
          <img className="sm:w-20 w-10  " src={logo} alt="" />
        <p className="  sm:text-[48px] font-bold ">GamesHub</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/my-profile'>
        <img className="w-[45px] rounded-full mr-10" src={user?.photoURL && user.photoURL.startsWith('http') ? user.photoURL : userProfile} alt="" />
        
        </Link>
        {user ? (
          <button onClick={handleLogout} className="btn  btn-primary sm:w-[140px]">Logout</button>
        ) : (
          <Link className="btn btn-primary w-[140px]" to="/auth/login">
            Login
          </Link>
        )}
      </div>
        <ToastContainer />
    </div>
  );
};

export default Navbar;
