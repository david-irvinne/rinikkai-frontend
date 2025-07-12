import {Route, Routes} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Members from "./pages/Members"

function App() {

  return (
    <div className="min-h-screen flex flex-col p-[0.5rem]">

      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/members" element={<Members/>}/>
        </Routes>
      </div>


      <Footer/>
    </div>
  )
}

export default App
