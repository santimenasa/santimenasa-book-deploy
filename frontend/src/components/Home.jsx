import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
 <Box display={'flex'} flexDirection="column" alignItems={'center'} marginTop={'10%'}>
  <NavLink to={'/books'}>
  <Button  variant='contained'>
    <Typography variant='h2'>
    View all Products
    </Typography>
   
  </Button>
  </NavLink>
 </Box>
  )
}

export default Home
