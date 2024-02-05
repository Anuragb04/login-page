// import React from 'react'
// import SignupForm from '../pages/SignUp'
// import frameImage from "../assets/frame.png"
// import LoginForm from './LoginForm'
// import {FcGoogle} from "react-icons/fc"


// // console.log("aagaya template");
// console.log("template starting")
// const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
//     // console.log("aagaya andr");
//   return (
//     <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row">

        
//         <div className='w-11/12 max-w-[450px] mx-auto md:mx-0'>
//         <h1 className='text-black font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
//             <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
//                 <span className='text-black'>{desc1}</span><br/>
//                 <span className='text-blue-100 italic'>{desc2}</span>
                
//             </p>
//             {console.log("form type check se pehle")}
//             {/* {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)} */}
//             {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

//             {console.log("form type check ke baad")}
//             {/* {console.log("form type check se pehle")}
//             {formtype === "signup" ?
//             (console.log(formtype)) : 
//             (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
//             {console.log(formtype==="signup")} */}

//             <div className='w-full flex items-center gap-x-2 my-4'>
//                 <div className='flex-1 h-[1px] bg-white'></div>
//                 <p className='text-black font-medium text-[0.875rem] leading-[1.375rem]'>OR</p>
//                 <div className='flex-1 h-[1px] bg-white'></div>
//             </div>
//             <button className='bg-white w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black border border-black'>
//             <FcGoogle/>
//                 <p>Sign Up with Google</p> 
//             </button>
//         </div>

//         <div className='relative w-11/12 max-w-[450px] mx-auto md:mx-0'>
//                 <img src={frameImage} 
//                 alt='Pattern'
//                 width={558}
//                 height={504}
//                 loading='lazy'></img>

//                 <img src={image} 
//                 alt='Students'
//                 width={558}
//                 height={490}
//                 loading='lazy'
//                 className='absolute z-10 -top-4 right-4'></img>
//         </div>
//     </div>
//   )
// }

// export default Template





import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.js";
import LoginForm from "./LoginForm.js";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-0 text-white">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-100">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
