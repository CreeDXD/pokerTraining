import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allcards">allcards</Link>
          </li>
          <li>
            <Link to="/tworandomcards">two random cards</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default App
