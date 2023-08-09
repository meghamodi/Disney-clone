import './App.css'
import Header from './components/Header'
import Home from './components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ImgSlider from './components/ImgSlider'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Home />
        <ImgSlider />
      </Router>
    </div>
  )
}

export default App
