// import { useNavigate } from "react-router-dom"
// import Popupmodel from "./Popupmodel";
import New from "./New";
import Original from "./Original";
import { useState } from "react";
// import Form from './Form';

function Navbar() {
  const [showsigin,setShowsigin] =useState(false)
  const [newF,setNewF]=useState(false)
  const handleclose =()=>{
    setShowsigin(false)
  }
  // const navigate = useNavigate();
  // const gotoSigin =()=>{
  //   navigate("/form")
  // }
  const handleclosing =()=>{
    setNewF(false)
  }
 
  return (
    <>
 <div>
    {/* for Navbar */}
        <div className='bg-blue-300 text-white p-4'>
           {/* <button
           onClick={()=>gotoSigin()}
            className='bg-red-400 text-white  px-8 py-2 pl-2'> Sign up</button> */}
             <button
           onClick={()=>setShowsigin(true)}
            className=' font-bold text-xl text-white px-8 py-2'> Sign up</button>
            <button
           onClick={()=>setNewF(true)}
            className=' font-bold text-xl12345
             ml-36 text-white px-8  py-2'> Sign up</button>
        </div>
        {/* for sigin form */}
        {/* <Popupmodel onClose ={handleclose} visible ={showsigin} /> */}
        <Original onClose ={handleclose} visible ={showsigin} />
        <New onClosing ={handleclosing} visible ={newF} />
        
    </div>
  
    </>
  )
}

export default Navbar