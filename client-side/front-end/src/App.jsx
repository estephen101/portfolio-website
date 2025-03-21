import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import './App.css'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'



function App() {

  return (
    <>
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/Services" element={<Services/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default App;
