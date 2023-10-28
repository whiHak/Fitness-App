import { Box } from '@mui/material'
import React, { useState } from 'react'
import {Banner, SearchExercise, Exercise} from './component'

const Home = () => {
  const[bodyPart, setBodyPart] = useState('ALL')
  console.log(bodyPart)

  return (
    <Box >
      <Banner/>
      <SearchExercise bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercise bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home