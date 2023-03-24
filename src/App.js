
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import New from "./component/New";
function App() {


  return (
    <>
  <Routes>
    <Route path="/" element={<Navbar />}/>
     <Route path="/form" element={<Form />}/>
     <Route path="/new" element={<New/>}/>
  </Routes>
    </>
  );
}

export default App;
