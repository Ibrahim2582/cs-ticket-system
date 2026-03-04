import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainLayoutes from './layoutes/mainLayoutes/MainLayoutes'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayoutes/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
