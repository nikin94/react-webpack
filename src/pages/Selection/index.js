import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'
import Typography from '@mui/material/Typography'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import MessageIcon from '@mui/icons-material/Message'

const Selection = () => {
  const IconWrapper = ({ Icon, text, link }) => {
    return (
      <Grow in>
        <Box
          sx={{
            borderRadius: 50,
            overflow: 'hidden',
            m: 2,
            boxShadow: 5,
            '&:hover': {
              transition: '.3s !important',
              transform: 'scale(1.1, 1.1) !important',
              boxShadow: 4
            }
          }}
        >
          <Link to={link}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                bgcolor: 'primary.light',
                width: 100,
                height: 100
              }}
            >
              <Icon sx={{ fontSize: 30, color: '#fff' }} />
              <Typography
                variant='body2'
                component='p'
                color='#fff'
                fontWeight='bold'
              >
                {text}
              </Typography>
            </Box>
          </Link>
        </Box>
      </Grow>
    )
  }

  return (
    <>
      <IconWrapper Icon={MusicNoteIcon} text='Albums' link='albums' />
      <IconWrapper Icon={MessageIcon} text='Posts' link='posts' />
    </>
  )
}

export default Selection
