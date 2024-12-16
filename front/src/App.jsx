import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from "./components/Home.jsx"
import NavBar from "./components/NavBar.jsx"


function App() {

  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
