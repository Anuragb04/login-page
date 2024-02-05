// import React, { useState,useNavigate } from 'react'
// import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link} from 'react-router-dom'

// const SignupForm = ({setIsLoggedIn}) => {

//   {console.log("signupform ke andr")}
//   // const navigate= useNavigate();
  
    
//   const [formData,setFormData]=useState({
//     firstname:"",
//     lastname:"",
//     email:"",
//     password:"",
//     confirmPassword:""
//   })
//   const[showPassword,setShowPasswod] = useState(false);
//   function changeHandler(event){
//     setFormData((prevData) =>(
//         {
//             ...prevData,
//             [event.target.name]:event.target.value
//         }
//     ))
// }

// function submitHandler(event){
//   event.preventDefault();
//   if(formData.password !== formData.confirmPassword){
//     toast.error("Passwords do not match");
//   }
//   else
//   {
//     setIsLoggedIn(true);
//     toast.success("Account Created"); 
//     const accountData={
//       ...formData
//     };
//     // navigate("/");
//   }
  
// }

//   return (
//     <div>
//         <div>
//           <button>
//             Student
//           </button>
//           <button>
//             Instructor
//           </button>
//         </div>

//         <form onSubmit={submitHandler}>
//           <div className='flex w-full gap-x-4'>
//               <label >
//                 <p className='text-[0.875rem] leading-[1.375rem] text-black mb-1'>First Name <sup>*</sup></p>
//                 <input 
//                 required
//                 type='text'
//                 name='firstname'
//                 onChange={changeHandler}
//                 placeholder='Enter first Name'
//                 value={formData.firstname}
//                 className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
//                 />
//               </label>

//               <label>
//                 <p className='text-[0.875rem] leading-[1.375rem] text-black mb-1'>Last Name <sup>*</sup></p>
//                 <input 
//                 required
//                 type='text'
//                 name='lastname'
//                 onChange={changeHandler}
//                 placeholder='Enter last Name'
//                 value={formData.lastname}
//                 className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
//                 />
//               </label>
//         </div>
          
//           <label>
//             <p className='text-[0.875rem] leading-[1.375rem] text-black mb-1'>Email Address<sup>*</sup></p>
//             <input 
//             required
//             type='email'
//             name='email'
//             onChange={changeHandler}
//             placeholder='Enter email address'
//             value={formData.email}
//             className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
//             />
//           </label>
//         <div className='flex w-full gap-x-4'>
//           <label className='realtive'>
//             <p className='text-[0.875rem] leading-[1.375rem] text-black mb-1'>Create Password <sup>*</sup></p>
//             <input 
//             required
//             type={showPassword ? ("text") : ("password")}
//             name='password'
//             onChange={changeHandler}
//             placeholder='Enter Password'
//             value={formData.password}
//             className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
//             />
//             <span 
//             className='absolute right-3 top-[38px] z-[10] cursor-pointer'
//             onClick={()=> setShowPasswod((prev)=>!prev)}>
//                 {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
//             </span>
//           </label>
      
//           <label className='relative '>
//             <p className='text-[0.875rem] leading-[1.375rem] text-black mb-1'>Confirm Password <sup>*</sup></p>
//             <input 
//             required
//             type={showPassword ? ("text") : ("password")}
//             name='confirmPassword'
//             onChange={changeHandler}
//             placeholder='Confirm Password'
//             value={formData.confirmPassword}
//             className='p-[12px] bg-black rounded-[0.5rem] text-white w-full'
//             />
//             <span
//             className='absolute right-3 top-[38px] z-[10] cursor-pointer'
//              onClick={()=> setShowPasswod((prev)=>!prev)}>
//                 {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
//             </span>
//           </label>
//         </div>
//             <button className='w-full bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black'>
//               Create Account
//             </button>

//         </form>

//     </div>
//   )
// }

// export default SignupForm



import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData([
      (prev) => [
        {
          ...prev,
          [event.target.name]: event.target.value,
        },
      ],
    ]);
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Create");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-white p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-black text-white"
              : "bg-transparent text-black "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-black text-white"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={FormData.firstName}
              name="firstName"
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-black-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={FormData.lastName}
              name="lastName"
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"
            name="email"
          />
        </label>

        <div className="flex gap-x-4">
          <label htmlFor="w-full relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"
            />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
