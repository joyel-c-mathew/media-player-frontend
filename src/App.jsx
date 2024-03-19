
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import WatchingHistory from './pages/WatchingHistory'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>

{/*react-router-dom */}
    <Header/>

    <Routes>

      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/watchHistory' element={<WatchingHistory/>} />

    </Routes>
    
     <Footer/>

    </>
  )
}

export default App
