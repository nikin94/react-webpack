import { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { BackButton } from '../../components'
import Modal from './Modal'

const Album = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState({})

  const albumPhotos = useLoaderData()
  const { userId } = useParams()

  const renderAlbum = () => {
    return albumPhotos.map(album => {
      const { id, thumbnailUrl, title } = album

      return (
        <Grid key={id} item>
          <Box
            component='img'
            onClick={() => {
              setSelectedAlbum(album)
              setModalIsOpen(true)
            }}
            alt={title}
            src={thumbnailUrl}
            loading='lazy'
            sx={{
              boxShadow: 3,
              cursor: 'pointer',
              transition: '.3s',
              transform: 'scale(1, 1)',
              '&:hover': {
                boxShadow: 8,
                transform: 'scale(1.1, 1.1)'
              }
            }}
          />
        </Grid>
      )
    })
  }

  return (
    <>
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
      />
      <BackButton url={'/user/' + userId + '/albums'} />
      <Grid container spacing={2} py={3} justifyContent='space-evenly'>
        {renderAlbum()}
      </Grid>
    </>
  )
}

export default Album
