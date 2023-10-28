import { Box } from '@mui/material'
import React, { useState } from 'react'
import {Banner, SearchExercise, Exercise} from './component'

const Home = () => {
  const[bodyPart, setBodyPart] = useState('ALL')

  return (
    <Box >
      <Banner/>
      <SearchExercise  />
      <Exercise/>
    </Box>
  )
}

export default Home