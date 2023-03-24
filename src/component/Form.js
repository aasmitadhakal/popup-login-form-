import { useState } from 'react';

export default function Form() {
  
    const [open,setOpen]=useState(true);
    const handleClick =()=>{
        setOpen(!open)
      }
     
  return (
    <>
          <div className='h-29 w-29 bg-blue-100 centered'>
      <div className='grid grid-cols-2'>
     
      {/* for sign up */}
      <form className=' '>
   
        <div className='text-3xl font-bold text-orange-600 '>Login</div>
        {/* for email */}
        <div>
       
            <input
              className="shadow appearance-none border my-6  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
             
            />
        </div>
         {/* for password */}
         <div>
        
             
            <input
              className="shadow appearance-none  my-4 border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Password"
              name="email"
             
            />
          </div>
          {/* for buttom */}
          <div>
      <button className='bg-orange-600 text-white mt-4 mx-24    py-2 rounded'>Login</button>
          </div>
          {/* for text */}
          <div onClick={handleClick}
          className='text-gray-500 font-bold ml-24 mt-2'>
           Have'nt Signup yet ? Sign UP
          </div>
      </form>
   
      {/* for Signup */}
      <form className=''>
        <div className='text-2xl font-bold text-orange-600 '>Sign Up</div>
        {/* for email */}
        <div>
       
            <input
              className="shadow appearance-none border  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
             
            />
        </div>
         {/* for password */}
         <div>
        
             
            <input
              className="shadow appearance-none  border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Password"
              name="email"
             
            />
          </div>
          {/* for buttom */}
          <div>
      <button className='bg-orange-600 text-white mt-4  rounded'>Sign Up</button>
          </div>
          {/* for text */}
          <div onClick={handleClick}
          className='text-gray-500 font-bold '>
          Already have account ? Login
          </div>
      </form>
  
      
      </div>
      <div className={`transition transition-transform duration-700 ease-in-out   ${(open ===true)?'transform translate-x-1/2':'transform translate-x-0'} ` }>
      <img src='login.jpg' className='h-29 w-80 transform -translate-y-96 ' alt=''></img>
      </div>
      </div>
     
    </>
  );
}

