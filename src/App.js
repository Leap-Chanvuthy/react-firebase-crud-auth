import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import More from "./pages/More";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/your-books" element={<About/>} />
         <Route path="/more" element={<More/>} />
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
