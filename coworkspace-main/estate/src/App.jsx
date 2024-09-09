import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Footer from "./Footer/Footer"
import Header from './Header/Header'
import Home from './Pages/Home'
import LoginSignup from "./Pages/LoginSignup"
function App() {

  return (
    <div>
      <BrowserRouter>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<LoginSignup />}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
