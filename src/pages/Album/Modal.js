import { useState } from 'react'

import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Fade from '@mui/material/Fade'
import { Modal as ModalMUI } from '@mui/material'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Modal = ({
  modalIsOpen,
  setModalIsOpen,
  selectedAlbum,
  setSelectedAlbum
}) => {
  const [modalImageIsLoaded, setModalImageIsLoaded] = useState(false)
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <ModalMUI
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      onTransitionExited={() => {
        setModalImageIsLoaded(false)
        setSelectedAlbum({})
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={modalIsOpen}>
        <Box
          sx={{
            position: 'absolute',
            width: mdScreen ? 'auto' : '100vw',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            bgcolor: 'transparent',
            boxShadow: modalImageIsLoaded ? 24 : 0
          }}
        >
          <Box
            component='img'
            maxWidth='100%'
            alt={selectedAlbum.title}
            src={selectedAlbum.url}
            loading='lazy'
            onLoad={() => setModalImageIsLoaded(true)}
            onClick={() => setModalIsOpen(false)}
          />

          {modalImageIsLoaded ? (
            <Box
              sx={{
                position: 'absolute',
                bgcolor: '#000',
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.5,
                p: 2,
                textAlign: 'center'
              }}
            >
              <Typography sx={{ color: '#fff' }}>
                {selectedAlbum.title}
              </Typography>
            </Box>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Fade>
    </ModalMUI>
  )
}

export default Modal
