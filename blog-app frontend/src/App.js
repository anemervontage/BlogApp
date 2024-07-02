import Navbar from "./Components/Navigation/Navbar";
import Input from "./Components/Pages/Input";
import Home from "./Components/Pages/Home";

import Posts from "./Components/Navigation/Posts";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    
<Router>
<Navbar/>
   <Routes>
        <Route exact path="/" element={
          <Home/>
        }>
        </Route>
        <Route exact path="/blog" element={
          <Input/>
        }>
        </Route>
    </Routes>
    
</Router>

  );
}

export default App;