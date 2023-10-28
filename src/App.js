import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { ExerciseDetail, Navbar, Home, Footer } from './components/component'
const App = () => {
  return (
    <Box  sx={{width:{lg:"1488px", md:"100vw"}, bgcolor:"#FFEEEE", alignItems:"center"}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App