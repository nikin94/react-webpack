import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <AppBar sx={{ position: 'relative', zIndex: 1, py: 2, height: 64 }}>
      <Container maxWidth='lg' sx={{ display: 'flex' }}>
        <Box flexShrink={1}>
          <Link to='/'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Typography sx={{ fontSize: 32, lineHeight: 1 }}>
                &#123;&nbsp;
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold', fontSize: 16, lineHeight: 1 }}
              >
                JSON&nbsp;
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  lineHeight: 1,
                  position: 'relative',
                  top: 5
                }}
              >
                app
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold', fontSize: 32, lineHeight: 1 }}
              >
                &nbsp;&#125;
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
