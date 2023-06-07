import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NoPage from './components/NoPage'
import { MenuP } from './components/MenuP'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<MenuP/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<NoPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
