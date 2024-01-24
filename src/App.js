import React  from 'react'
import {Routes , Route} from "react-router-dom"

import Home from "./pages/Home.jsx"
import UP from './components/UP.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

export const Social_Media = ["https://www.facebook.com/MRMadvertisingDubai" , "https://www.instagram.com/mrmadvertising/" , "https://www.linkedin.com/company/mrm-advertising-media" , "https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!"]
export const Animate = "zoom-in"


const App = () => {

  return ( 
    <div className='App'>
      <UP  />
      <Navbar />
      <Routes>
        <Route index   path='/'    element={<Home />} />                           
        
      </Routes>
      <Footer />
    </div>

  )
}

export default App




