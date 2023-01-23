import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
<Box display={'flex'} flexDirection={"column"} alignItems={'center'}>
  <Typography variant='h2'>
    This is mi very first CRUD aplication made out of love
  </Typography>
  <Typography variant='h4'>
    This MERN Stack aplicattion idea come up in mi head to practice programming skills. Also, reading is one of mi biggest passions thats why i decide to make this app.
    Best regards
  </Typography>
</Box>
    
  )
}

export default AboutUs
