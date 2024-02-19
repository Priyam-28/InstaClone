// import { Button } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'

import './App.css'
import Authpage from './pages/Authpage/Authpage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth' element={<Authpage />} />

      </Routes>
    </>
  )
}

export default App
