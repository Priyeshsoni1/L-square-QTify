import { PauseRounded, PlayArrowRounded } from '@mui/icons-material'
import { Box, IconButton, Slider } from '@mui/material'
import React from 'react'

const MusicPlayer = () => {
    const [paused, setPaused] = React.useState(false);
  return (
    <Box sx={{display:"flex",justifyContent:"flex-start",gap:"250px",my:10}}>
        <Box>
            Card
        </Box>
        <Box sx={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem',backgroundColor:"var(--color-white)",color:"var(--color-black)",borderRadius:"50%"}}
               
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem',backgroundColor:"var(--color-white)",color:"var(--color-black)",borderRadius:"50%"}} htmlColor={"mainIconColor"} />
            )}
          </IconButton>
            <Slider/>
        </Box>
    </Box>
  )
}

export default MusicPlayer