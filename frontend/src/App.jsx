import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Checkout from './Components/Checkout'
import Thankyou from './Components/Thankyou'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route index path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
         < Route path='/thankyou' element={<Thankyou />} />
      </Routes>
    </div>
  )
}

export default App
