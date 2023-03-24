import React from 'react'

export default function Popupmodel({visible,onClose}) {
    if(!visible) return null;
  return (
    <div className='fixed inset-0  transition transition-shadow delay-150 duration-300 ease-in-out  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
       
       <form className=' mx-36 bg-blue-400 p-4'>
       <button onClick={onClose}>x</button>
        <div className='text-2xl font-bold text-orange-600 mt-12 mb-4 ml-12'>Sign Up</div>
        {/* for email */}
        <div>
       
            <input
              className="shadow appearance-none border my-6 w-96 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
             
            />
        </div>
         {/* for password */}
         <div>
        
             
            <input
              className="shadow appearance-none w-96 my-4 border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Password"
              name="email"
             
            />
          </div>
          {/* for buttom */}
          <div>
      <button className='bg-orange-600 text-white mt-4 mb-2  mx-8 p-2 rounded'>Sign Up</button>
          </div>
          {/* for text */}
          <div
          className='text-gray-500 font-bold ml-24 mt-2'>
          Already have account ? Login
          </div>
      </form>
  
  
   
        
          
    </div>
  )
}

