import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate= useNavigate();
    const [formData, setFormData]= useState({
        email:"",password:""
    })
    
    const[showPassword,setShowPasswod] = useState(false);

    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }

  return (
    <form onSubmit={submitHandler}
    className='w-full flex flex-col gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email Id'
            name='email'
            className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] leading-[1.375rem] text-black mb-1'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
            />


            <span 
            className='absolute right-3 top-[38px] z-[10] cursor-pointer'
            onClick={()=> setShowPasswod((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-red-500 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm


