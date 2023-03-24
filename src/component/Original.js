import {useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';

export default function Original({visible,onClose}) {
    const [open,setOpen]=useState(true);
    const handleClick =()=>{
        setOpen(!open)
      }
    if(!visible) return null;
  return (
    <div className='fixed inset-0   transition transition-shadow delay-150 duration-300 ease-in-out  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
        <AnimatePresence>
       <motion.div
       initial={{y:'-300'}}
       animate={{y:0,ease:"easeInOut"}}
       className='h-29 w-29 bg-blue-100 relative centered'>
      <div className='grid grid-cols-2'>
     
      {/* for sign up */}
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
          <div onClick={handleClick}
          className='text-blue-700 underline  ml-24 mt-2'>
           Have'nt Signup yet ? Sign UP
          </div>
      </form>
   
      {/* for Signup */}
      <form className=' '>
   
        <div className='text-xl flex justify-center item-center mt-4 font-bold text-orange-600 '>Sign Up</div>
  
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
      <button className='bg-orange-600 text-white mt-4 mx-12 py-2 px-12 rounded'>Sign up</button>
          </div>
          {/* for text */}
          <div onClick={handleClick}
          className='text-blue-700 underline  ml-24 mt-2'>
           Already have account? Login
          </div>
      </form>
  
      
      </div>
      <div className={`transition transition-transform duration-700 ease-in-out  ${(open ===true)?'transform translate-x-1/2':'transform translate-x-0'} ` }>
      <img src='login.jpg' className='h-29 w-80 transform -translate-y-72 ' alt=''></img>
      </div>
      <button className='absolute top-0 right-2 font-bold text-2xl' onClick={onClose}>x</button>    
      </motion.div> 
      </AnimatePresence>
    </div>
  )
}

 