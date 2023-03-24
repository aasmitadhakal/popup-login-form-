import {useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';

export default function New({visible,onClosing}) {
    const [first,setFirst]=useState(true); 
    const handleForm =()=>{
        setFirst(!first)
      }
      if(!visible) return null;
  return (
    <>
    
    <div  className='fixed inset-0   transition transition-shadow delay-150 duration-300 ease-in-out  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  '
   
        >
          <AnimatePresence>
      <motion.div
       initial={{y:'-300'}}
    animate={{y:0,ease:"easeInOut"}}
    className='h-29 relative w-29 bg-blue-100 '>
    <div className='grid grid-cols-2 '>
        <div>
         <img className='h-29 w-80' 
          src='login.jpg' alt=''></img>
        </div>
        <div>
            {first?
           
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
 :
      
 <motion.form className=' '
 initial={{y:'600'}}
 animate={{y:0,ease:"easeInOut"}}
 >
 <div className='text-xl flex justify-center item-center mt-4 font-bold text-orange-600 '>Sign up</div>
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
<button 
 className='bg-orange-600 text-white mt-4 mx-12 py-2 px-12 rounded'>Sign up</button>
   </div>
   {/* for text */}
   <div onClick={handleForm}
   className='text-blue-700 underline  ml-24 mt-2'>
   Already have account ? Login
   </div>
</motion.form>
  }
 </div>
       
      
 </div>
 <button className='absolute top-0 right-2 font-bold text-2xl' onClick={onClosing}>x</button>   
 </motion.div>
 </AnimatePresence>
 </div>

    </>
  )
}
