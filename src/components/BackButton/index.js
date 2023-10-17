import { Link } from 'react-router-dom'

import Fab from '@mui/material/Fab'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const BackButton = ({ url }) => {
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    <Link to={url}>
      <Fab
        color='primary'
        size={xlScreen ? 'large' : 'small'}
        sx={{
          position: 'absolute',
          left: xlScreen ? -50 : 20,
          top: 20
        }}
      >
        <ArrowBackIcon fontSize='small' />
      </Fab>
    </Link>
  )
}

export default BackButton
