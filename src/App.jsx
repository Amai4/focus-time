import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
import Prefocus from './pages/Prefocus.jsx'
import Focus from './pages/Focus.jsx'
import Finished from './pages/Finished.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prefocus" element={<Prefocus />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/finished" element={<Finished />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
