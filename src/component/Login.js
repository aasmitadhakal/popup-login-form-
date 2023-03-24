import React from 'react'

function Login() {
  return (
    <>
 <form className=' '>
   <div className='text-xl flex justify-center item-center mt-4 font-bold text-orange-600 '>Login</div>
   {/* for email */}
   <div>
  
       <input
         className="shadow appearance-none border my-6 w-3/4 mx-8 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="email"
         type="text"
         placeholder="Email"
         name="email"
        
       />
   </div>
    {/* for password */}
    <div>
   
        
       <input
         className="shadow appearance-none  my-4  mx-8 border rounded w-3/4  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         id="email"
         type="text"
         placeholder="Password"
         name="email"
        
       />
     </div>
     {/* for buttom */}
     <div>
 <button className='bg-orange-600 text-white mt-4 mx-12 py-2 px-12 rounded'>Login</button>
     </div>
     {/* for text */}
     <div onClick={handleForm}
     className='text-blue-700 underline  ml-24 mt-2'>
      Have'nt Signup yet ? Sign UP
     </div>
 </form>
    </>
  )
}

export default Login