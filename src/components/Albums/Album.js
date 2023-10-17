import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grow from '@mui/material/Grow'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Album = ({ album }) => {
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const { id, userId, title } = album

  return (
    <Link to={`/user/${userId}/albums/${id}`}>
      <Grow in>
        <Box>
          <Card
            sx={{
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              opacity: 0.6,
              transition: '.3s',
              p: smScreen ? 5 : 1,
              minHeight: smScreen ? 250 : 150,
              fontSize: smScreen ? 'inherit' : 12,
              '&:hover': {
                opacity: 1
              }
            }}
          >
            {title}
          </Card>
        </Box>
      </Grow>
    </Link>
  )
}

export default Album
