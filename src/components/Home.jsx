import { Box } from '@mui/material'
import React from 'react'
import {Banner, SearchExercise, Exercise} from './component'

const Home = () => {
  return (
    <Box >
      <Banner/>
      <SearchExercise/>
      <Exercise/>
    </Box>
  )
}

export default Home