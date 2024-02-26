// import { Button } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'

import './App.css'
import Authpage from './pages/Authpage/Authpage'
import PageLayout from './Layouts/PageLayout/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage'


function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth' element={<Authpage />} />
        <Route path='/profile' element={<ProfilePage/>} />

      </Routes>
    </PageLayout>
  )
}

export default App
