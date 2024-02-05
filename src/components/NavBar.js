import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import App from '../App'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn= props.setIsLoggedIn;

  return (
    <div className="flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto">
        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
        </Link>

        <nav>
            <ul className='text-black flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>


        <div className='md:flex items-center gap-x-4 hidden'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-white text-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-white text-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button className='bg-white text-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>Log Out</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-white text-black py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}

export default NavBar